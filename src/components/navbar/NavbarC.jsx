import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "/logo.png";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="navbar-transparente"
    >
      <Container fluid>
        <ScrollLink
          className="navbar-logo"
          to="inicio"
          smooth={true}
          duration={400}
          offset={-40}
        >
          <img src={logo} alt="Logo" />
        </ScrollLink>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
          className={`nav-toggle ${expanded ? "open" : ""}`}
        >
          <span className="custom-toggler-icon">
            {expanded ? (
              <AiOutlineClose className="icon-navbar" />
            ) : (
              <GiHamburgerMenu className="icon-navbar" />
            )}
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="position-absolute start-50 translate-middle-x nav-center d-flex ">
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={400}
              offset={-40}
              onClick={() => setExpanded(false)}
            >
              Inicio
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="sobremi"
              spy={true}
              smooth={true}
              duration={400}
              offset={-40}
              onClick={() => setExpanded(false)}
            >
              Sobre mi
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="tecnologias"
              spy={true}
              smooth={true}
              duration={400}
              offset={-40}
              onClick={() => setExpanded(false)}
            >
              Tecnologías
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              duration={400}
              offset={-40}
              onClick={() => setExpanded(false)}
            >
              Proyectos
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="servicios"
              spy={true}
              smooth={true}
              duration={400}
              offset={-40}
              onClick={() => setExpanded(false)}
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              className="nav-link"
              activeClass="active"
              to="certificados"
              spy={true}
              smooth={true}
              duration={400}
              offset={-40}
              onClick={() => setExpanded(false)}
            >
              Certificados
            </ScrollLink>
          </Nav>
          <Nav className="nav-right">
            <div className="nav-icon">
              <a
                href="https://github.com/VGFernandezMedina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/vgabriel-fernandezm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
