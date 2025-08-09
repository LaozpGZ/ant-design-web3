import { ChainType } from '@ant-design/web3-common';
import { 
  metadata_Petra, 
  metadata_AptosConnect, 
  metadata_MSafe, 
  metadata_RimoSafe,
  metadata_OKXAptos
} from '@ant-design/web3-assets';
import type { AptosWalletConfig } from './types';
import { walletFactory } from './factory';
import { 
  PetraWalletAdapter, 
  AptosConnectAdapter, 
  OKXWalletAdapter,
  MSafeWalletAdapter 
} from './adapters';

// Petra Wallet Configuration
export const petra: AptosWalletConfig = {
  ...metadata_Petra,
  key: 'petra',
  supportChainTypes: [ChainType.SVM], // Aptos uses similar VM concepts
  adapter: new PetraWalletAdapter(),
};

// AptosConnect Configuration
export const aptosConnect: AptosWalletConfig = {
  ...metadata_AptosConnect,
  key: 'aptosConnect',
  supportChainTypes: [ChainType.SVM],
  adapter: new AptosConnectAdapter(),
};

// OKX Wallet Configuration
export const okx: AptosWalletConfig = {
  ...metadata_OKXAptos,
  key: 'okx',
  supportChainTypes: [ChainType.SVM],
  adapter: new OKXWalletAdapter(),
};

// MSafe Wallet Configuration
export const msafe: AptosWalletConfig = {
  ...metadata_MSafe,
  key: 'msafe',
  supportChainTypes: [ChainType.SVM],
  adapter: new MSafeWalletAdapter(),
};

// RimoSafe Wallet Configuration
export const rimoSafe: AptosWalletConfig = {
  ...metadata_RimoSafe,
  key: 'rimoSafe',
  supportChainTypes: [ChainType.SVM],
};

// Built-in wallets collection
export const builtInWallets: AptosWalletConfig[] = [
  petra,
  aptosConnect,
  okx,
  msafe,
  rimoSafe,
];

// Register built-in wallets
export const initBuiltInWallets = (): void => {
  builtInWallets.forEach(wallet => {
    walletFactory.register(wallet);
  });
};