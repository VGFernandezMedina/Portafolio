import { Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Container fluid className="navbar-contenedor">
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
    </Container>
  );
};

export default Navbar;
