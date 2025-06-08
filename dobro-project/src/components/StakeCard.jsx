// src/components/StakeCard.jsx
import { Card, Button, Select, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

export default function StakeCard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
      <Card
        style={{ width: 400, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        bodyStyle={{ padding: 32 }}
      >
        <Title level={3} style={{ color: '#FF7A00', textAlign: 'center', marginBottom: 8 }}>Stake SOL</Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>
          Stake your SOL with DOBRO<br />
          to earn staking and MEV rewards from Solana validators
        </Text>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', fontSize: 12, marginBottom: 16 }}>
          Total SOL staked 1,571,534.5063
        </Text>
        <Card
          size="small"
          style={{ marginBottom: 12, background: '#f5f5f5', borderRadius: 8 }}
          bodyStyle={{ padding: 12 }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/solana-logo.png" alt="SOL" style={{ height: 24, marginRight: 8 }} />
            <Text strong>You're staking</Text>
            <span style={{ flex: 1 }} />
            <Text strong>0.00</Text>
          </div>
        </Card>
        <Card
          size="small"
          style={{ marginBottom: 16, background: '#f5f5f5', borderRadius: 8 }}
          bodyStyle={{ padding: 12 }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/dsol-logo.png" alt="dSOL" style={{ height: 24, marginRight: 8 }} />
            <Text strong>To receive</Text>
            <span style={{ flex: 1 }} />
            <Text strong>0.00</Text>
          </div>
        </Card>
        <Button type="primary" block style={{ background: '#FF7A00', borderColor: '#FF7A00', marginBottom: 12 }}>
          Connect Wallet
        </Button>
        <Select defaultValue="Squads (beta)" style={{ width: '100%', marginBottom: 8 }}>
          <Select.Option value="squads">Squads (beta)</Select.Option>
        </Select>
        <Text type="secondary" style={{ fontSize: 12 }}>1 dSOL = 1.085507737 SOL</Text>
      </Card>
    </div>
  );
}