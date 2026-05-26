import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import España from "/flag-spain.svg";
import eeuu from "/flag-eeuu.svg"; */
/* import AlternarTema from "../alternarTema/AlternarTema"; */
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={isHome ? "navbar-transparente" : "navbar-normal"}
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
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Inicio
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="sobremi"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Sobre mi
              </ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="tecnologias"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Tecnologias
              </ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="proyectos"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Proyectos
              </ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="servicios"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Servicios
              </ScrollLink>
            </Nav.Link>
            <Nav.Link>
              <ScrollLink
                to="certificados"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Certificados
              </ScrollLink>
            </Nav.Link>
          </Nav>
          <Nav className="nav-right">
            {/* <div className="flags">
              <img src={eeuu} alt="flag-eeuu" />
              <img src={España} alt="flag-spain" />
            </div>
            <AlternarTema /> */}
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
