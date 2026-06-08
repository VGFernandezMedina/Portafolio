import { Col, Container, Image, Row } from "react-bootstrap";
import "./SobreMi.css";
import Separador from "../separador/Separador";
import perfil from "/perfil.png";
import { LuUserRoundCheck } from "react-icons/lu";

const SobreMi = () => {
  return (
    <Container fluid id="sobremi" className="py-5">
      <Separador
        title="Sobre mi"
        Icon={LuUserRoundCheck}
        iconClass="sobremi-icon"
      />
      <Container fluid className="cont-parrafo">
        <Row>
          <Col
            sm={{ span: 12, order: 1 }}
            md={{ span: 4, order: 2 }}
            lg={{ span: 4, order: 2 }}
            className="d-flex align-items-center flex-column py-4"
          >
            <Image src={perfil} roundedCircle fluid className="img-perfil" />
          </Col>

          <Col
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 8, order: 1 }}
            className="pt-4 g-0 col-sobremi"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="parrafo">
              Hola! Soy <span className="texto-naranja">Víctor Gabriel</span>,
              mis amigos y compañeros me dicen Gaby o Gabo. Tengo 28 años y soy
              de Tucumán.
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
