import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const goToTop = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="navbar-transparente"
    >
      <Container fluid>
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
            <Nav.Link onClick={goToTop}>Inicio</Nav.Link>
            <ScrollLink
              to="sobremi"
              onClick={() => setExpanded(false)}
              smooth={true}
              duration={50}
              offset={0}
            >
              Sobre mi
            </ScrollLink>
            <ScrollLink
              to="tecnologias"
              onClick={() => setExpanded(false)}
              smooth={true}
              duration={50}
              offset={0}
            >
              Tecnologias
            </ScrollLink>
            <ScrollLink
              to="proyectos"
              onClick={() => setExpanded(false)}
              smooth={true}
              duration={50}
              offset={0}
            >
              Proyectos
            </ScrollLink>
            <ScrollLink
              to="servicios"
              onClick={() => setExpanded(false)}
              smooth={true}
              duration={50}
              offset={0}
            >
              Servicios
            </ScrollLink>
            <ScrollLink
              to="certificados"
              onClick={() => setExpanded(false)}
              smooth={true}
              duration={50}
              offset={0}
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
                href="https://www.linkedin.com/in/victor-gabriel-fernández-medina-331286250"
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
