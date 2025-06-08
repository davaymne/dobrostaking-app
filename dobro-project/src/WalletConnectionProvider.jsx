import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function WalletConnectionProvider({ children }) {
  const network = WalletAdapterNetwork.Mainnet;
  //const endpoint = useMemo(() => 'https://api.mainnet-beta.solana.com', []);
  const endpoint = useMemo(() => 'https://mainnet.helius-rpc.com/?api-key=72833e67-9861-4787-ae1f-53ae2379ccf5', []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}