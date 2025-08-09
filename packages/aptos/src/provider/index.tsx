import React, { useMemo, type FC, type PropsWithChildren } from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import type { Locale } from '@ant-design/web3-common';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';

import { aptos } from '../chains';
import type { AptosChainConfig } from '../types';
import type { AptosWalletConfig } from '../wallets/types';

export interface AptosWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: AptosChainConfig[];
  wallets?: AptosWalletConfig[];
  balance?: boolean;
  
  // Aptos WalletProvider specific
  autoConnect?: boolean;
}

export const AptosWeb3ConfigProvider: FC<PropsWithChildren<AptosWeb3ConfigProviderProps>> = ({
  locale,
  chains = [aptos],
  wallets = [],
  balance = false,
  autoConnect = true,
  children,
}) => {
  const aptosWalletAdapters = useMemo(() => {
    return wallets
      .filter(wallet => wallet.adapter)
      .map(wallet => wallet.adapter);
  }, [wallets]);

  const web3ConfigProviderProps = useMemo(() => {
    return {
      locale,
      chains,
      availableWallets: wallets,
      balance: balance as any, // Use any for now since balance has different types in different contexts
    };
  }, [locale, chains, wallets, balance]);

  return (
    <Web3ConfigProvider {...web3ConfigProviderProps}>
      <AptosWalletAdapterProvider 
        {...({ plugins: aptosWalletAdapters, autoConnect } as any)}
      >
        {children}
      </AptosWalletAdapterProvider>
    </Web3ConfigProvider>
  );
};