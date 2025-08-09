import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_OKXAptos: WalletMetadata = {
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#000000"/>
      <path 
        d="M12 8H20V12H24V20H20V24H12V20H8V12H12V8Z" 
        fill="url(#okx-gradient)"
      />
      <defs>
        <linearGradient id="okx-gradient" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0055FF"/>
          <stop offset="1" stopColor="#0099FF"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  name: 'OKX Wallet',
  remark: 'OKX multi-chain wallet with Aptos support',
  app: {
    link: 'https://www.okx.com/web3',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
      description: 'Access your OKX wallet right from your browser',
    },
  ],
};