# @ant-design/web3-aptos

Ant Design Web3 Aptos adapter.

## Install

```bash
npm install @ant-design/web3-aptos --save
```

## Usage

```tsx
import { AptosWeb3ConfigProvider } from '@ant-design/web3-aptos';

const App: React.FC = () => {
  return (
    <AptosWeb3ConfigProvider chains={[aptos, aptosTestnet]}>
      <YourComponent />
    </AptosWeb3ConfigProvider>
  );
};
```

## Features

- 🚀 Support multiple Aptos wallets (Petra, AptosConnect, OKX, MSafe, etc.)
- 🎨 Built-in wallet icons and UI components
- 🔗 Support mainnet, testnet, and devnet chains
- 📦 TypeScript support
- 🛠️ Easy integration with Ant Design components

## Supported Wallets

- [Petra Wallet](https://petra.app/)
- [AptosConnect](https://aptosconnect.app/)
- [OKX Wallet](https://www.okx.com/web3)
- [MSafe](https://www.msafe.org/)
- [Nightly Wallet](https://nightly.app/)
- [Pontem Wallet](https://pontem.network/pontem-wallet)
- [RimoSafe](https://rimo.app/)

## API

- `AptosWeb3ConfigProvider`: Provider component
- `useWallet`: Hook for wallet operations
- `useConnection`: Hook for connection management
- `chains`: Pre-configured chain configs (aptos, aptosTestnet, aptosDevnet)

## Contributing

Please read our [contributing guide](../../docs/guide/contributing.md) to learn about our development process.

## License

MIT