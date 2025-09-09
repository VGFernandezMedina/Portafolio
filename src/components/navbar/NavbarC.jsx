import { Container, NavDropdown } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import España from "/flag-spain.svg";
import eeuu from "/flag-eeuu.svg";
import AlternarTema from "../alternarTema/AlternarTema";

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-navbar">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="position-absolute start-50 translate-middle-x nav-center d-flex">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Sobre mi</Nav.Link>
            <Nav.Link href="#">Tecnologias</Nav.Link>
            <Nav.Link href="#">Proyectos</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
          </Nav>
          <Nav className="ms-auto nav-right">
            <div className="flags">
              <img src={eeuu} alt="flag-eeuu" />
              <img src={España} alt="flag-spain" />
            </div>
            <AlternarTema />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
