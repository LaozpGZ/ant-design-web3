import type { AptosWalletConfig } from './types';

export interface WalletFactory {
  create: (name: string) => AptosWalletConfig | undefined;
  getWallets: () => AptosWalletConfig[];
}

export class AptosWalletFactory implements WalletFactory {
  private wallets: Map<string, AptosWalletConfig> = new Map();

  register(wallet: AptosWalletConfig): void {
    if (wallet.key) {
      this.wallets.set(wallet.key.toString(), wallet);
    }
  }

  create(key: string): AptosWalletConfig | undefined {
    return this.wallets.get(key);
  }

  getWallets(): AptosWalletConfig[] {
    return Array.from(this.wallets.values());
  }

  clear(): void {
    this.wallets.clear();
  }
}

export const walletFactory = new AptosWalletFactory();