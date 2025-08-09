import { ChainType } from '@ant-design/web3-common';
import { 
  metadata_Petra, 
  metadata_AptosConnect, 
  metadata_MSafe, 
  metadata_RimoSafe 
} from '@ant-design/web3-assets';
import type { AptosWalletConfig } from './types';
import { walletFactory } from './factory';
import { PetraWalletAdapter, AptosConnectAdapter } from './adapters';

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

// OKX Wallet Configuration (placeholder)
export const okx: AptosWalletConfig = {
  key: 'okx',
  name: 'OKX Wallet',
  remark: 'OKX multi-chain wallet with Aptos support',
  icon: 'https://www.okx.com/favicon.ico', // Will be replaced with local assets
  extensions: [
    {
      key: 'Chrome',
      browserIcon: 'https://github.com/google/chrome/raw/main/chrome/app/theme/default/product_logo_16.png',
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
      description: 'Access your OKX wallet right from your browser',
    },
  ],
  app: {
    link: 'https://www.okx.com/web3',
  },
  supportChainTypes: [ChainType.SVM],
};

// MSafe Wallet Configuration
export const msafe: AptosWalletConfig = {
  ...metadata_MSafe,
  key: 'msafe',
  supportChainTypes: [ChainType.SVM],
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