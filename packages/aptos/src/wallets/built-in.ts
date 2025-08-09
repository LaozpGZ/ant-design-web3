import { ChainType } from '@ant-design/web3-common';
import type { AptosWalletConfig } from './types';
import { walletFactory } from './factory';
import { PetraWalletAdapter, AptosConnectAdapter } from './adapters';

// Petra Wallet Configuration
export const petra: AptosWalletConfig = {
  key: 'petra',
  name: 'Petra Wallet',
  remark: 'The official Aptos wallet for web3',
  icon: 'https://petra.app/favicon.ico', // Will be replaced with local assets
  extensions: [
    {
      key: 'Chrome',
      browserIcon: 'https://github.com/google/chrome/raw/main/chrome/app/theme/default/product_logo_16.png',
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci',
      description: 'Access your Petra wallet right from your browser',
    },
  ],
  app: {
    link: 'https://petra.app/',
  },
  supportChainTypes: [ChainType.SVM], // Aptos uses similar VM concepts
  adapter: new PetraWalletAdapter(),
};

// AptosConnect Configuration
export const aptosConnect: AptosWalletConfig = {
  key: 'aptosConnect',
  name: 'AptosConnect',
  remark: 'Connect with Google or Apple account',
  icon: 'https://aptosconnect.app/favicon.ico', // Will be replaced with local assets
  extensions: false, // AptosConnect doesn't require browser extension
  app: {
    link: 'https://aptosconnect.app/',
  },
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

// MSafe Wallet Configuration (placeholder)
export const msafe: AptosWalletConfig = {
  key: 'msafe',
  name: 'MSafe',
  remark: 'Multi-signature wallet for Aptos',
  icon: 'https://www.msafe.org/favicon.ico', // Will be replaced with local assets
  extensions: false, // MSafe is primarily web-based
  app: {
    link: 'https://www.msafe.org/',
  },
  supportChainTypes: [ChainType.SVM],
};

// Built-in wallets collection
export const builtInWallets: AptosWalletConfig[] = [
  petra,
  aptosConnect,
  okx,
  msafe,
];

// Register built-in wallets
export const initBuiltInWallets = (): void => {
  builtInWallets.forEach(wallet => {
    walletFactory.register(wallet);
  });
};