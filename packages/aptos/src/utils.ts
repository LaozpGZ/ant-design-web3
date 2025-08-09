import type { AptosAccount, AptosChainConfig } from './types';

export const formatAddress = (address: string, start = 6, end = 4): string => {
  if (!address) return '';
  if (address.length <= start + end) return address;
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

export const isValidAptosAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{64}$/.test(address) || /^0x[a-fA-F0-9]{1,}$/.test(address);
};

export const getExplorerUrl = (
  chain: AptosChainConfig,
  address: string,
  type: 'address' | 'transaction' = 'address'
): string => {
  const baseUrl = chain.explorerUrl || 'https://explorer.aptoslabs.com';
  const networkQuery = chain.network !== 'mainnet' ? `?network=${chain.network}` : '';
  
  if (type === 'transaction') {
    return `${baseUrl}/txn/${address}${networkQuery}`;
  }
  
  return `${baseUrl}/account/${address}${networkQuery}`;
};

export const shortenAddress = (address: string): string => {
  return formatAddress(address);
};

export const copyToClipboard = (text: string): Promise<void> => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for older browsers
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Unable to copy to clipboard', err);
  }
  document.body.removeChild(textArea);
  return Promise.resolve();
};