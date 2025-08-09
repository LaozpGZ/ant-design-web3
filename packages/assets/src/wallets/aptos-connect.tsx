import type { WalletMetadata } from '@ant-design/web3-common';

export const metadata_AptosConnect: WalletMetadata = {
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#1E40AF"/>
      <circle cx="16" cy="16" r="8" fill="url(#aptos-connect-gradient)"/>
      <defs>
        <linearGradient id="aptos-connect-gradient" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA"/>
          <stop offset="1" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  name: 'AptosConnect',
  remark: 'Connect with Google or Apple account',
  app: {
    link: 'https://aptosconnect.app/',
  },
  extensions: false, // No browser extension needed
};