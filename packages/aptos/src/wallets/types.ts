import type { Wallet } from '@ant-design/web3-common';

export interface AptosWalletAdapter {
  name: string;
  url: string;
  icon: string;
  readyState: 'Installed' | 'NotDetected' | 'Loadable' | 'Unsupported';
  isReadyState: (state: string) => boolean;
  
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  
  signAndSubmitTransaction(transaction: any): Promise<any>;
  signTransaction(transaction: any): Promise<any>;
  signMessage(message: any): Promise<any>;
  
  account: {
    address: string;
    publicKey: string;
  } | null;
  
  network: {
    name: string;
    chainId: string;
    url: string;
  } | null;
  
  connected: boolean;
  connecting: boolean;
}

export interface AptosWalletConfig extends Wallet {
  adapter?: AptosWalletAdapter;
  adapterName?: string;
}