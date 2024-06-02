import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import logo from "../images/LogoColored.png"

export default function NavBarComponent() {
  return (
    <>
      <Navbar id="PawsNavbar" expand="lg md" className="row g-0 fixed-top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img 
                src={logo}
                className="img-fluid" 
                width="100" 
                height="100" 
                alt="Logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Brand className="text-center col-6">
            <Link className="text-gold" to="/">
              Home ฅ^•ﻌ•^ฅ
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar`}
            aria-labelledby={`offcanvasNavbarLabel`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                4Paws
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="col-12 text-center text-nowrap">
                <Nav.Link 
                  className="text-gold col-lg-6 col-md-6 col-12" 
                  href={"/Cats/"}
                >
                  ⋆⭒˚ Cats
                </Nav.Link>
                <Nav.Link 
                  className="text-gold col-lg-6 col-md-6 col-12" 
                  href={"/Dogs/"}
                >
                  Dogs ⋆⭒˚
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
