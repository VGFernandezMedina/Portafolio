import { Container, NavDropdown } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import España from "/flag-spain.svg";
import eeuu from "/public/flag-eeuu.svg";

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
            <Nav.Link href="#">Modo Oscuro</Nav.Link>
            <NavDropdown title="Idioma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
                <img src={eeuu} alt="flag-eeuu" className="flags" />
                Inglés
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                <img src={España} alt="flag-spain" className="flags" />
                Español
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;

{
  /* <Container fluid className="navbar-contenedor">
  <ul className="menu-navbar">
    <li>
      <a href="">Inicio</a>
    </li>
    <li>
      <a href="">Sobre mi</a>
    </li>
    <li>
      <a href="">Tecnologias</a>
    </li>
    <li>
      <a href="">Proyectos</a>
    </li>
    <li>
      <a href="">Contacto</a>
    </li>
  </ul>
</Container> */
}
