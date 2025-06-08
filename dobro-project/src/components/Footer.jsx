// src/components/Footer.jsx
import { Layout, Typography, Row, Col, Space } from 'antd';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function AppFooter() {
  return (
    <Footer style={{ background: '#fff', borderTop: '1px solid #eee', marginTop: 64, padding: '40px 24px' }}>
      <Row gutter={[32, 24]} justify="space-between">
        <Col>
          <Space direction="vertical" size={0}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <img src="/logo.svg" alt="DOBRO Logo" style={{ height: 32 }} />
              <span style={{ color: '#6DC3B2', fontWeight: 700, fontSize: 20 }}>DOBRO</span>
            </div>
            <div style={{ color: '#FF7A00', fontWeight: 600 }}>
              <div>Simple ways</div>
              <div>Strong impact</div>
              <div>Shared purpose</div>
            </div>
          </Space>
        </Col>
        <Col>
          <Title level={5}>Ecosystem</Title>
          <Text>Holders Club</Text><br />
          <Text>Pumpjack</Text>
        </Col>
        <Col>
          <Title level={5}>Resources</Title>
          <Text>Pool Info</Text><br />
          <Text>Documentation</Text><br />
          <Text>Media Kit</Text>
        </Col>
        <Col>
          <Title level={5}>Help</Title>
          <Text>FAQ</Text><br />
          <Text>Support</Text>
        </Col>
        <Col>
          <Title level={5}>Services</Title>
          <Text>Profit Calculator</Text><br />
          <Text>Stake Breakdown</Text><br />
          <Text>Stake Locations</Text>
        </Col>
        <Col>
          <Title level={5}>Community</Title>
          <Space>
            <a href="#"><img src="/x.svg" alt="X" style={{ height: 20 }} /></a>
            <a href="#"><img src="/telegram.svg" alt="Telegram" style={{ height: 20 }} /></a>
            <a href="#"><img src="/discord.svg" alt="Discord" style={{ height: 20 }} /></a>
            <a href="#"><img src="/linkedin.svg" alt="LinkedIn" style={{ height: 20 }} /></a>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
}