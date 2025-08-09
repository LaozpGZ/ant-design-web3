import type { WalletMetadata } from '@ant-design/web3-common';

export const metadata_MSafe: WalletMetadata = {
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#059669"/>
      <path 
        d="M16 8L22 12V20L16 24L10 20V12L16 8Z" 
        fill="url(#msafe-gradient)"
        stroke="#ffffff" 
        strokeWidth="1"
      />
      <circle cx="16" cy="16" r="3" fill="#ffffff"/>
      <defs>
        <linearGradient id="msafe-gradient" x1="10" y1="8" x2="22" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981"/>
          <stop offset="1" stopColor="#059669"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  name: 'MSafe',
  remark: 'Multi-signature wallet for Aptos',
  app: {
    link: 'https://www.msafe.org/',
  },
  extensions: false, // Web-based wallet
};