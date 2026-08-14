import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="md"
      sticky="top"
      expanded={expanded}
      className="navbar-normal"
    >
      <Container fluid>
        <Link className="navbar-logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>
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
          <Nav className="position-absolute start-50 translate-middle-x nav-center">
            <NavLink
              className="nav-link"
              to="/"
              end
              onClick={() => setExpanded(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link"
              to="/projects"
              onClick={() => setExpanded(false)}
            >
              Proyectos
            </NavLink>
            <NavLink
              className="nav-link"
              to="/services"
              onClick={() => setExpanded(false)}
            >
              Servicios
            </NavLink>
          </Nav>
          <Nav className="nav-right">
            <div className="nav-icon-nav">
              <a
                href="https://github.com/VGFernandezMedina"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon-nav" />
              </a>
              <a
                href="https://www.linkedin.com/in/vgabriel-fernandezm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon-nav" />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
