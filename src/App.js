import { Carousel, Container, Nav, Navbar, NavDropdown , Card , Button, Row, Col, Placeholder, Spinner } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div>
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#About">Contact us</Nav.Link>
            <NavDropdown
             title="Our services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1571235908642-0459c9475ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Click here</h3>
          <p>For more information</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1619472331124-aeb492cd2ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Click here</h3>
          <p>For more information</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Click here</h3>
          <p>For more information</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row xs={1} md={2} className="g-4hotel">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <Card.Body>
              <Card.Title>Hotel</Card.Title>
              <Card.Text>
              Des Réservations Faciles, Rapides, Sécurisées et Sans Frais, et un Tarif Garanti.
              Obtenez -10 % avec Genius. 
              Réservation sécurisée.
              </Card.Text>
            </Card.Body>
            <Button variant="primary">BOOK NOW !</Button>
          </Card>
        </Col>
      ))}
    </Row>


    <Button variant="primary" disabled className='loadingbar'>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>

</div>

)}

export default App;
