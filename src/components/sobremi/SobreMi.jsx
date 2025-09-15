import { Col, Container, Image, Row } from "react-bootstrap";
import "./SobreMi.css";
import Separador from "../separador/Separador";
import perfil from "/perfil.jpg";
import { LuUserRoundCheck } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const SobreMi = () => {
  return (
    <Container fluid id="sobremi" className="py-5">
      <div className="d-flex align-items-center">
        <LuUserRoundCheck size={24} className="icono-titulo" />
        <Separador title="Sobre mi" />
      </div>
      <Container fluid className="cont-parrafo">
        <Row>
          <Col
            sm={{ span: 12, order: 1 }}
            md={{ span: 4, order: 2 }}
            lg={{ span: 4, order: 2 }}
            className="d-flex align-items-center flex-column py-4"
          >
            <Image src={perfil} roundedCircle fluid className="img-perfil" />
            <div className="pt-4 iconos-sobremi">
              <div className="bg-icono-sobremi">
                <a
                  href="https://github.com/VGFernandezMedina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <span>Github</span>
                </a>
              </div>
              <div className="bg-icono-sobremi">
                <a
                  href="https://www.linkedin.com/in/victor-gabriel-fernández-medina-331286250"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <span>Linkedin</span>
                </a>
              </div>
              <div className="bg-icono-sobremi">
                <a
                  href="mailto:gabrielfernandez090997@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdOutgoingMail />
                  <span>Correo</span>
                </a>
              </div>
            </div>
          </Col>

          <Col
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 8, order: 1 }}
            className="pt-4 g-0"
          >
            <p className="parrafo">
              Hola! Soy <span className="texto-azul">Víctor Gabriel</span>, mis
              amigos y compañeros me dicen Gaby o Gabo. Tengo 28 años y soy de
              Tucumán.
            </p>
            <p className="parrafo">
              Soy <span className="texto-azul">Técnico Electromecánico </span>
              egresado en la ENET N°2. Fui ex estudiante de
              <span className="texto-azul"> Ingeniería Mecánica</span> y
              actualmente finalizando la{" "}
              <span className="texto-azul">
                Tecnicatura Superior en Mecatrónica
              </span>{" "}
              en la UTN-FRT, donde nació mi interés por la programación al
              escribir mis primeras líneas de código en Arduino.
            </p>
            <p className="parrafo">
              Adquirí y fortalecí mis conocimientos en RollingCode School, donde
              obtuve el certificado de
              <span className="texto-naranja"> Desarrollador Fullstack</span>.
              Participé en proyectos grupales utilizando la metodología
              <span className="texto-naranja"> SCRUM</span> y trabajando con el
              stack
              <span className="texto-naranja"> MERN.</span>
            </p>
            <p className="parrafo">
              Actualmente{" "}
              <span className="texto-naranja">
                busco seguir creciendo como desarrollador
              </span>
              . Me considero una persona con facilidad para el{" "}
              <span className="texto-naranja">trabajo en equipo</span> y con el
              <span className="texto-naranja"> compromiso</span> de aplicar mis
              conocimientos en cada proyecto que se presente.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SobreMi;
