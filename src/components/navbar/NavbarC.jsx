import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
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

  const handleNavClick = (section) => {
    setExpanded(false);

    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 0,
        offset: -40,
      });
    }, 250);
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
            <Nav.Link to="sobremi" onClick={() => handleNavClick("sobremi")}>
              Sobre mi
            </Nav.Link>
            <Nav.Link
              to="tecnologias"
              onClick={() => handleNavClick("tecnologias")}
            >
              Tecnologias
            </Nav.Link>
            <Nav.Link
              to="proyectos"
              onClick={() => handleNavClick("proyectos")}
            >
              Proyectos
            </Nav.Link>
            <Nav.Link
              to="servicios"
              onClick={() => handleNavClick("servicios")}
            >
              Servicios
            </Nav.Link>
            <Nav.Link
              to="certificados"
              onClick={() => handleNavClick("certificados")}
            >
              Certificados
            </Nav.Link>
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
