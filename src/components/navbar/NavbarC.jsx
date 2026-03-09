import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import España from "/flag-spain.svg";
import eeuu from "/flag-eeuu.svg"; */
/* import AlternarTema from "../alternarTema/AlternarTema"; */
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="bg-navbar"
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
            <Nav.Link>
              <Link
                to="inicio"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Inicio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="sobremi"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Sobre mi
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="tecnologias"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Tecnologias
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="proyectos"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Proyectos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="servicios"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Servicios
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="certificados"
                onClick={() => setExpanded(false)}
                smooth={true}
                duration={50}
                offset={-70}
              >
                Certificados
              </Link>
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
