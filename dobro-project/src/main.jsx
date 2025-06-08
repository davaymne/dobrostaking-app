import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css'; // For Ant Design v5+
import WalletConnectionProvider from './WalletConnectionProvider';
import './wallet-button.css';

createRoot(document.getElementById('root')).render(
  <WalletConnectionProvider>
    <App />
  </WalletConnectionProvider>
)