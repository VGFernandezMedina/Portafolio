import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-5">
      <p>
        © 2025, portafolio desarrollado con React por Víctor Gabriel Fernández
        Medina. <br /> Casi todos los derechos reservados.
      </p>
      <nav className="nav-icon py-2">
        <a
          href="https://github.com/VGFernandezMedina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-gabriel-fernández-medina-331286250"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
