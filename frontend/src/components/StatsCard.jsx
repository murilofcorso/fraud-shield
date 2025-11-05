import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function StatsCards() {
  const stats = [
    { title: 'Mensagens analisadas', value: '10' },
    { title: 'Suspeitas', value: '30%' },
    { title: 'Phishing via e-mail', value: '25%' },
    { title: 'Phishing via SMS/WhatsApp', value: '40%' },
  ];

  return (
    <Container className="my-5 text-center">
      <h3 className="fw-semibold mb-4">Estatísticas de golpes</h3>
      <Row className="g-3 justify-content-center">
        {stats.map((s, index) => (
          <Col key={index} xs={6} md={3}>
            <Card className="p-3 shadow-sm">
              <h4 className="fw-bold">{s.value}</h4>
              <p className="text-muted m-0">{s.title}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
