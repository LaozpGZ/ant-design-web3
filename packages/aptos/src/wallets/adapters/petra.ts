import { BaseWalletAdapter, WalletReadyState } from './base';
import type {
  AptosAccount,
  AptosSignAndSubmitTransactionInput,
  AptosSignAndSubmitTransactionOutput,
  AptosSignTransactionInput,
  AptosSignTransactionOutput,
  AptosSignMessageInput,
  AptosSignMessageOutput
} from '../../types';

interface PetraWindow {
  aptos?: {
    connect(): Promise<{ address: string; publicKey: string }>;
    disconnect(): Promise<void>;
    isConnected(): Promise<boolean>;
    account(): Promise<{ address: string; publicKey: string; minKeysRequired?: number; authKey?: string }>;
    network(): Promise<{ name: string; chainId?: string; url?: string }>;
    signAndSubmitTransaction(transaction: any): Promise<any>;
    signTransaction(transaction: any): Promise<any>;
    signMessage(message: any): Promise<any>;
    onAccountChange(callback: (account: any) => void): void;
    onNetworkChange(callback: (network: any) => void): void;
  };
}

declare const window: PetraWindow;

export class PetraWalletAdapter extends BaseWalletAdapter {
  name = 'Petra';
  url = 'https://petra.app/';
  icon = 'https://petra.app/favicon.ico';

  private _account: AptosAccount | null = null;
  private _network: { name: string; chainId?: string; url?: string } | null = null;
  private _readyState: WalletReadyState = 
    typeof window === 'undefined' || typeof window.aptos === 'undefined'
      ? WalletReadyState.NotDetected
      : WalletReadyState.Installed;

  get account(): AptosAccount | null {
    return this._account;
  }

  get network(): { name: string; chainId?: string; url?: string } | null {
    return this._network;
  }

  get readyState(): WalletReadyState {
    return this._readyState;
  }

  async connect(): Promise<void> {
    try {
      if (this.readyState !== WalletReadyState.Installed) {
        throw new Error('Petra wallet is not installed');
      }

      const response = await window.aptos!.connect();
      const account: AptosAccount = {
        address: response.address,
        publicKey: response.publicKey,
      };

      this._account = account;
      this._network = await window.aptos!.network();
      
      this.emit('connect', account);
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (window.aptos) {
        await window.aptos.disconnect();
      }
      this._account = null;
      this._network = null;
      this.emit('disconnect');
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async signAndSubmitTransaction(
    input: AptosSignAndSubmitTransactionInput
  ): Promise<AptosSignAndSubmitTransactionOutput> {
    try {
      if (!this.connected || !window.aptos) {
        throw new Error('Wallet not connected');
      }

      const result = await window.aptos.signAndSubmitTransaction(input.data);
      return { hash: result.hash };
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async signTransaction(
    input: AptosSignTransactionInput
  ): Promise<AptosSignTransactionOutput> {
    try {
      if (!this.connected || !window.aptos) {
        throw new Error('Wallet not connected');
      }

      const result = await window.aptos.signTransaction(input.transaction);
      return { signature: result.signature };
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async signMessage(
    input: AptosSignMessageInput
  ): Promise<AptosSignMessageOutput> {
    try {
      if (!this.connected || !window.aptos) {
        throw new Error('Wallet not connected');
      }

      const result = await window.aptos.signMessage({
        message: input.message,
        nonce: input.nonce,
      });
      
      return {
        signature: result.signature,
        fullMessage: result.fullMessage,
      };
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }
}