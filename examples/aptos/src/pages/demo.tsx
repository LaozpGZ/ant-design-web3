import { ConnectButton, Connector, useAccount } from '@ant-design/web3';
import { Mainnet, Testnet, Devnet } from '@ant-design/web3-aptos';
import {
  AptosWeb3ConfigProvider,
  petra,
  aptosConnect,
  okx,
  msafe,
  useAptosProvider,
} from '@ant-design/web3-aptos';
import { Button, message, Card, Space, Typography } from 'antd';
import { useState } from 'react';

const { Title, Text } = Typography;

const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [signature, setSignature] = useState<string>('');
  const [transactionHash, setTransactionHash] = useState<string>('');

  const provider = useAptosProvider();
  const account = useAccount();

  const handleSignMessage = async () => {
    if (!account?.account) {
      messageApi.error('Please connect wallet first!');
      return;
    }
    
    try {
      const message = 'Welcome to Ant Design Web3 Aptos!';
      const sig = await provider?.signMessage({
        message,
        nonce: Date.now(),
      });
      setSignature(sig?.signature || '');
      messageApi.success('Message signed successfully!');
    } catch (error) {
      messageApi.error('Failed to sign message: ' + (error as Error).message);
    }
  };

  const handleSimpleTransaction = async () => {
    if (!account?.account) {
      messageApi.error('Please connect wallet first!');
      return;
    }

    try {
      // Simple APT transfer transaction
      const transaction = {
        type: 'entry_function_payload',
        function: '0x1::aptos_account::transfer',
        arguments: [account.account, '1000'], // Transfer 0.00001 APT to self
        type_arguments: [],
      };

      const txHash = await provider?.signAndSubmitTransaction(transaction);
      setTransactionHash(txHash?.hash || '');
      messageApi.success('Transaction submitted successfully!');
    } catch (error) {
      messageApi.error('Transaction failed: ' + (error as Error).message);
    }
  };

  const getNetworkInfo = async () => {
    if (!provider) {
      messageApi.error('Provider not available');
      return;
    }

    try {
      const network = await provider.getNetwork();
      const chainId = await provider.getChainId();
      messageApi.info(`Network: ${network}, Chain ID: ${chainId}`);
    } catch (error) {
      messageApi.error('Failed to get network info: ' + (error as Error).message);
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 800 }}>
      {contextHolder}
      
      <Title level={2}>Ant Design Web3 Aptos Demo</Title>
      
      <Card style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title level={4}>Wallet Connection</Title>
          <Connector modalProps={{ mode: 'simple' }}>
            <ConnectButton quickConnect style={{ minWidth: 200 }} />
          </Connector>
          
          {account?.account && (
            <div>
              <Text strong>Connected Account: </Text>
              <Text code>{account.account}</Text>
            </div>
          )}
        </Space>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title level={4}>Wallet Operations</Title>
          
          <Space wrap>
            <Button type="primary" onClick={handleSignMessage}>
              Sign Message
            </Button>
            <Button onClick={handleSimpleTransaction}>
              Send Transaction
            </Button>
            <Button onClick={getNetworkInfo}>
              Get Network Info
            </Button>
          </Space>

          {signature && (
            <div>
              <Text strong>Last Signature: </Text>
              <Text code style={{ wordBreak: 'break-all' }}>{signature.substring(0, 64)}...</Text>
            </div>
          )}

          {transactionHash && (
            <div>
              <Text strong>Last Transaction: </Text>
              <Text code>{transactionHash}</Text>
            </div>
          )}
        </Space>
      </Card>

      <Card>
        <Title level={4}>Supported Wallets</Title>
        <Space direction="vertical">
          <Text>• Petra Wallet - Native Aptos wallet browser extension</Text>
          <Text>• AptosConnect - Social login wallet solution</Text>
          <Text>• OKX Wallet - Multi-chain wallet with Aptos support</Text>
          <Text>• MSafe - Multi-signature wallet for Aptos</Text>
        </Space>
      </Card>
    </div>
  );
};

export default function HomePage() {
  return (
    <AptosWeb3ConfigProvider
      wallets={[petra(), aptosConnect(), okx(), msafe()]}
      chains={[Mainnet, Testnet, Devnet]}
    >
      <App />
    </AptosWeb3ConfigProvider>
  );
}