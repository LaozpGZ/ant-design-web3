import { EventEmitter } from 'eventemitter3';
import type { 
  AptosAccount,
  AptosSignAndSubmitTransactionInput,
  AptosSignAndSubmitTransactionOutput,
  AptosSignTransactionInput,
  AptosSignTransactionOutput,
  AptosSignMessageInput,
  AptosSignMessageOutput
} from '../../types';

export enum WalletReadyState {
  /**
   * User-installable wallets can typically be detected by scanning for an API
   * that they've injected into the global context. If such an API is present,
   * we consider the wallet to have been installed.
   */
  Installed = 'Installed',
  NotDetected = 'NotDetected',
  /**
   * Loadable wallets are always available to you. Since you can load them at
   * any time, it's meaningless to say that they have been "detected".
   */
  Loadable = 'Loadable',
  /**
   * If a wallet is not supported on a given platform (eg. server-rendering, or
   * mobile) then it will stay in the `Unsupported` state.
   */
  Unsupported = 'Unsupported',
}

export interface WalletAdapterEvents {
  connect(account: AptosAccount): void;
  disconnect(): void;
  readyStateChange(readyState: WalletReadyState): void;
  error(error: Error): void;
}

export abstract class BaseWalletAdapter extends EventEmitter<WalletAdapterEvents> {
  abstract name: string;
  abstract url: string;
  abstract icon: string;
  abstract readyState: WalletReadyState;

  get connected(): boolean {
    return !!this.account;
  }

  abstract account: AptosAccount | null;
  abstract network: { name: string; chainId?: string; url?: string } | null;

  abstract connect(): Promise<void>;
  abstract disconnect(): Promise<void>;

  abstract signAndSubmitTransaction(
    input: AptosSignAndSubmitTransactionInput
  ): Promise<AptosSignAndSubmitTransactionOutput>;

  abstract signTransaction(
    input: AptosSignTransactionInput
  ): Promise<AptosSignTransactionOutput>;

  abstract signMessage(
    input: AptosSignMessageInput
  ): Promise<AptosSignMessageOutput>;
}