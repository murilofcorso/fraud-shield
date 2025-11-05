import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function InputForm() {
  return (
    <Container className="text-center my-5">
      <h1 className="fw-bold">Bem-vindo ao FraudShield</h1>
      <p className="text-muted mb-4">Simulador de prevenção de golpes e fraudes</p>

      <Form className="mx-auto" style={{ maxWidth: '600px' }}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Cole aqui o conteúdo da mensagem"
          />
        </Form.Group>
        <Form.Select className="mb-3">
          <option>Origem</option>
          <option>E-mail</option>
          <option>SMS</option>
          <option>WhatsApp</option>
          <option>Outros</option>
        </Form.Select>
        <Button variant="primary" className="w-100 py-2" style={{ backgroundColor: '#1e355e' }}>
          Analisar
        </Button>
      </Form>
    </Container>
  );
}
