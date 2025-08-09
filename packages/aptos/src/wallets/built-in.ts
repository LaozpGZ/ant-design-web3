import type { AptosWalletConfig } from './types';
import { walletFactory } from './factory';

// Placeholder for built-in wallets - will be implemented in next commits
export const builtInWallets: AptosWalletConfig[] = [];

// Register built-in wallets (placeholder)
export const initBuiltInWallets = (): void => {
  builtInWallets.forEach(wallet => {
    walletFactory.register(wallet);
  });
};

// Export individual wallet configs (will be populated in next commits)
export const petra: AptosWalletConfig | undefined = undefined;
export const aptosConnect: AptosWalletConfig | undefined = undefined;
export const okx: AptosWalletConfig | undefined = undefined;
export const msafe: AptosWalletConfig | undefined = undefined;