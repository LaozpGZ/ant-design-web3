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

// AptosConnect uses the official adapter plugin
// This is a wrapper to integrate with our wallet system
export class AptosConnectAdapter extends BaseWalletAdapter {
  name = 'AptosConnect';
  url = 'https://aptosconnect.app/';
  icon = 'https://aptosconnect.app/favicon.ico';

  private _account: AptosAccount | null = null;
  private _network: { name: string; chainId?: string; url?: string } | null = null;
  private _readyState: WalletReadyState = WalletReadyState.Loadable; // Always available
  private _aptosConnectWallet: any = null;

  get account(): AptosAccount | null {
    return this._account;
  }

  get network(): { name: string; chainId?: string; url?: string } | null {
    return this._network;
  }

  get readyState(): WalletReadyState {
    return this._readyState;
  }

  constructor(aptosConnectWallet?: any) {
    super();
    this._aptosConnectWallet = aptosConnectWallet;
  }

  async connect(): Promise<void> {
    try {
      if (!this._aptosConnectWallet) {
        throw new Error('AptosConnect wallet not initialized');
      }

      const response = await this._aptosConnectWallet.connect();
      const account: AptosAccount = {
        address: response.address,
        publicKey: response.publicKey,
      };

      this._account = account;
      this._network = response.network || { name: 'mainnet' };
      
      this.emit('connect', account);
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this._aptosConnectWallet) {
        await this._aptosConnectWallet.disconnect();
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
      if (!this.connected || !this._aptosConnectWallet) {
        throw new Error('Wallet not connected');
      }

      const result = await this._aptosConnectWallet.signAndSubmitTransaction(input.data);
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
      if (!this.connected || !this._aptosConnectWallet) {
        throw new Error('Wallet not connected');
      }

      const result = await this._aptosConnectWallet.signTransaction(input.transaction);
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
      if (!this.connected || !this._aptosConnectWallet) {
        throw new Error('Wallet not connected');
      }

      const result = await this._aptosConnectWallet.signMessage({
        message: input.message,
        nonce: input.nonce,
      });
      
      return {
        signature: result.signature,
        fullMessage: result.fullMessage || input.message,
      };
    } catch (error: any) {
      this.emit('error', error);
      throw error;
    }
  }
}