import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <i className="bi bi-shield-lock me-2"></i> FraudShield
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Histórico</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}