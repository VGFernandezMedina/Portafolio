import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import España from "/flag-spain.svg";
import eeuu from "/flag-eeuu.svg";
import AlternarTema from "../alternarTema/AlternarTema";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-navbar">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav-toggle"
        >
          <span className="custom-toggler-icon">
            <GiHamburgerMenu />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="prueba">
          <Nav className="position-absolute start-50 translate-middle-x nav-center d-flex ">
            <Nav.Link>
              <Link to="inicio" smooth={true} duration={100} offset={-70}>
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="sobremi" smooth={true} duration={100} offset={-70}>
                Sobre mi
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="tecnologias" smooth={true} duration={100} offset={-70}>
                Tecnologias
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="proyectos" smooth={true} duration={100} offset={-70}>
                Proyectos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="servicios" smooth={true} duration={100} offset={-70}>
                Servicios
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="nav-right">
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
