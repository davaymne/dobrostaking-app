// src/components/WalletBalance.jsx
import { useEffect, useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function WalletBalance() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!publicKey) {
      setBalance(null);
      return;
    }
    connection.getBalance(publicKey).then(lamports => {
      setBalance(lamports / LAMPORTS_PER_SOL);
    });
  }, [publicKey, connection]);

  if (!publicKey) return null;

  return (
    <div style={{ color: '#6DC3B2', fontWeight: 600, marginLeft: 16, fontSize: 14 }}>
      Balance: {balance === null ? 'Loading...' : `${balance.toFixed(4)} SOL`}
    </div>
  );
}