import React, { useMemo, type FC, type PropsWithChildren } from 'react';
import { Web3ConfigProvider } from '@ant-design/web3-common';
import type { Locale } from '@ant-design/web3-common';
import { WalletProvider } from '@aptos-labs/wallet-adapter-react';

import { aptos, type AptosChainConfig } from '../chains';
import type { AptosWalletConfig } from '../wallets/types';

export interface AptosWeb3ConfigProviderProps {
  locale?: Locale;
  chains?: AptosChainConfig[];
  wallets?: AptosWalletConfig[];
  balance?: boolean;
  
  // Aptos WalletProvider specific
  autoConnect?: boolean;
  optInWallets?: string[];
  dappConfig?: {
    network?: string;
  };
}

export const AptosWeb3ConfigProvider: FC<PropsWithChildren<AptosWeb3ConfigProviderProps>> = ({
  locale,
  chains = [aptos],
  wallets = [],
  balance = false,
  autoConnect = true,
  optInWallets,
  dappConfig,
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
      balance,
    };
  }, [locale, chains, wallets, balance]);

  return (
    <Web3ConfigProvider {...web3ConfigProviderProps}>
      <WalletProvider 
        wallets={aptosWalletAdapters}
        autoConnect={autoConnect}
        optInWallets={optInWallets}
        dappConfig={dappConfig}
      >
        {children}
      </WalletProvider>
    </Web3ConfigProvider>
  );
};