import { Container } from "react-bootstrap";
import "./Inicio.css";
import { useEffect } from "react";
import {
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import curriculum from "/Gabriel-Fernandez-CV.pdf";

const Inicio = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.onload = () => {
      window.particlesJS.load("particles-js", "/particles.json");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <Container
      fluid
      id="inicio"
      className="inicio py-5 text-center"
      data-aos="fade-down"
    >
      <div
        id="particles-js"
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
      <h3 className="pb-2 pt-5">Hola! Un gusto conocerte 👋 soy</h3>
      <h1>Gabriel Fernández | Desarrollador</h1>
      <span className="py-4 gap-3 align-items-center">
        <span className="punto"></span>Disponible para trabajar
      </span>
      <ul className="iconos-sociales">
        <li>
          <a
            href="https://github.com/VGFernandezMedina"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <FaGithub />
            <span className="texto-icono">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/victor-gabriel-fernández-medina-331286250"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
            <span className="texto-icono">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:gabrielfernandez090997@gmail.com?subject=Consulta%20desde%20tu%20portafolio&body=Hola%20Gabriel,%20me%20gustar%C3%ADa%20hablar%20contigo."
            target="_blank"
            rel="noopener noreferrer"
            className="correo"
          >
            <MdOutlineMail />
            <span className="texto-icono">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5493816135750?text=Hola%20Gabriel!%20Vi%20tu%20portafolio%20y%20quiero%20contactarte."
            target="_blank"
            rel="noopener noreferrer"
            className="wpp"
          >
            <FaWhatsapp />
            <span className="texto-icono">WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href={curriculum}
            target="_blank"
            rel="noopener noreferrer"
            className="cv"
          >
            <FaFileDownload />
            <span className="texto-icono">Currículum</span>
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default Inicio;
