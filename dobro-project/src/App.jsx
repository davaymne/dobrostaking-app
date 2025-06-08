// src/App.jsx
import 'antd/dist/reset.css';
import AppHeader from './components/Header';
import StakeCard from './components/StakeCard';
import AppFooter from './components/Footer';
import './wallet-button.css';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#97d1c7', display: 'flex', flexDirection: 'column' }}>
      <AppHeader />
      <main style={{ flex: 1 }}>
        <StakeCard />
      </main>
      <AppFooter />
    </div>
  );
}