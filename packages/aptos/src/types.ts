import type { Wallet, Chain } from '@ant-design/web3-common';

// Aptos Chain IDs
export enum AptosChainIds {
  Mainnet = 1,
  Testnet = 2,
  Devnet = 3,
}

export interface AptosChainConfig extends Chain {
  id: AptosChainIds;
  network: string;
  rpcUrls: Record<string, string>;
  explorerUrl?: string;
}

export interface AptosWallet extends Wallet {
  adapter?: any;
}

export interface AptosAccount {
  address: string;
  publicKey: string;
  minKeysRequired?: number;
  authKey?: string;
}

export interface AptosSignAndSubmitTransactionInput {
  data: any;
}

export interface AptosSignAndSubmitTransactionOutput {
  hash: string;
}

export interface AptosSignTransactionInput {
  transaction: any;
}

export interface AptosSignTransactionOutput {
  signature: string;
}

export interface AptosSignMessageInput {
  message: string;
  nonce: string;
}

export interface AptosSignMessageOutput {
  signature: string;
  fullMessage: string;
}