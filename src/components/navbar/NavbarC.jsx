import { Container } from "react-bootstrap";
import "./NavbarC.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import logo from "/logo.webp";
import { Link, NavLink } from "react-router-dom";

const NavbarC = () => {
  const [expanded, setExpanded] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Siempre mostrar el navbar cuando estamos arriba del todo
      if (currentScrollY <= 0) {
        setShowNavbar(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      // Bajando
      if (currentScrollY > lastScrollY.current + 10 && currentScrollY > 100) {
        setShowNavbar(false);
      }
      // Subiendo
      else if (currentScrollY < lastScrollY.current - 10) {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      className={`navbar-normal ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
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
              to="/proyectos"
              onClick={() => setExpanded(false)}
            >
              Proyectos
            </NavLink>
            <NavLink
              className="nav-link"
              to="/servicios"
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
