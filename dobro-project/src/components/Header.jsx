// src/components/Header.jsx
import { Layout, Menu, Button, Switch } from 'antd';
import { WalletOutlined } from '@ant-design/icons';

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header style={{ background: '#fff', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ color: '#6DC3B2', fontSize: 14 }}>Solana empowers hearts</span>
        <img src="/logo.png" alt="DOBRO Logo" style={{ height: 32 }} />
        <span style={{ color: '#6DC3B2', fontWeight: 700, fontSize: 20 }}>DOBRO</span>
      </div>
      <Menu mode="horizontal" selectable={false} style={{ borderBottom: 'none', flex: 1, marginLeft: 40 }}>
        <Menu.Item key="stake" style={{ color: '#FF7A00', fontWeight: 600 }}>Stake</Menu.Item>
        <Menu.Item key="unstake" style={{ color: '#FF7A00', fontWeight: 600 }}>Unstake</Menu.Item>
        <Menu.Item key="more" style={{ color: '#FF7A00', fontWeight: 600 }}>More</Menu.Item>
      </Menu>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <Button type="primary" icon={<WalletOutlined />} style={{ background: '#6DC3B2', borderColor: '#6DC3B2' }}>
          Connect Wallet
        </Button>
        <Switch checkedChildren="🌞" unCheckedChildren="🌙" />
      </div>
    </Header>
  );
}