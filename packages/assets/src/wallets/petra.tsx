import type { WalletMetadata } from '@ant-design/web3-common';
import { ChromeCircleColorful } from '@ant-design/web3-icons';

export const metadata_Petra: WalletMetadata = {
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#000000"/>
      <path d="M8 8H24V24H8V8Z" fill="url(#petra-gradient)"/>
      <defs>
        <linearGradient id="petra-gradient" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B6B"/>
          <stop offset="1" stopColor="#4ECDC4"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  name: 'Petra',
  remark: 'The official Aptos wallet for web3',
  app: {
    link: 'https://petra.app/',
  },
  extensions: [
    {
      key: 'Chrome',
      browserIcon: <ChromeCircleColorful />,
      browserName: 'Chrome',
      link: 'https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci',
      description: 'Access your Petra wallet right from your browser',
    },
  ],
};