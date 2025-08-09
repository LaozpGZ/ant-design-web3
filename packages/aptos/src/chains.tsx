import { ChainType } from '@ant-design/web3-common';
import { AptosChainIds, type AptosChainConfig } from './types';

export const aptos: AptosChainConfig = {
  id: AptosChainIds.Mainnet,
  name: 'Aptos',
  type: ChainType.SVM, // Aptos uses similar VM concepts
  network: 'mainnet',
  rpcUrls: {
    default: 'https://fullnode.mainnet.aptoslabs.com/v1',
  },
  explorerUrl: 'https://explorer.aptoslabs.com',
  nativeCurrency: {
    name: 'Aptos Coin',
    symbol: 'APT',
    decimals: 8,
  },
};

export const aptosTestnet: AptosChainConfig = {
  id: AptosChainIds.Testnet,
  name: 'Aptos Testnet',
  type: ChainType.SVM,
  network: 'testnet',
  rpcUrls: {
    default: 'https://fullnode.testnet.aptoslabs.com/v1',
  },
  explorerUrl: 'https://explorer.aptoslabs.com/?network=testnet',
  nativeCurrency: {
    name: 'Aptos Coin',
    symbol: 'APT',
    decimals: 8,
  },
};

export const aptosDevnet: AptosChainConfig = {
  id: AptosChainIds.Devnet,
  name: 'Aptos Devnet',
  type: ChainType.SVM,
  network: 'devnet',
  rpcUrls: {
    default: 'https://fullnode.devnet.aptoslabs.com/v1',
  },
  explorerUrl: 'https://explorer.aptoslabs.com/?network=devnet',
  nativeCurrency: {
    name: 'Aptos Coin',
    symbol: 'APT',
    decimals: 8,
  },
};