import type { WalletMetadata } from '@ant-design/web3-common';

export const metadata_RimoSafe: WalletMetadata = {
  icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#7C3AED"/>
      <path 
        d="M16 6L24 10V22L16 26L8 22V10L16 6Z" 
        fill="url(#rimo-gradient)"
        stroke="#ffffff" 
        strokeWidth="1"
      />
      <rect x="12" y="12" width="8" height="8" rx="1" fill="#ffffff"/>
      <defs>
        <linearGradient id="rimo-gradient" x1="8" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6"/>
          <stop offset="1" stopColor="#7C3AED"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  name: 'RimoSafe',
  remark: 'Safe and secure Aptos wallet',
  app: {
    link: 'https://rimo.app/',
  },
  extensions: false, // Web-based wallet
};