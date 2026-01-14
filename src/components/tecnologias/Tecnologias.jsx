import { Col, Container, Row } from "react-bootstrap";
import "./Tecnologias.css";
import Separador from "../separador/Separador";
import Categorias from "../categorias/Categorias";
import { RiToolsFill } from "react-icons/ri";

const Tecnologias = () => {
  const frontendIcons = [
    { src: "/html.svg", name: "HTML" },
    { src: "/css.svg", name: "CSS" },
    { src: "/js.svg", name: "JavaScript" },
    { src: "/react.svg", name: "React" },
    { src: "/bootstrap.svg", name: "Bootstrap" },
    { src: "/c++.svg", name: "C++" },
    { src: "/figma.svg", name: "Figma" },
  ];
  const backendIcons = [
    { src: "/node-js.svg", name: "NodeJS" },
    { src: "/express-js.svg", name: "ExpressJS" },
    { src: "/mongodb.svg", name: "MongoDB" },
  ];
  const toolsIcons = [
    { src: "/git.svg", name: "Git" },
    { src: "/github.svg", name: "GitHub" },
    { src: "/bash.svg", name: "Bash" },
    { src: "/powershell.svg", name: "Powershell" },
    { src: "/vsc.svg", name: "VSCode" },
    { src: "/npm.svg", name: "npm" },
    { src: "/trello.svg", name: "Trello" },
    { src: "/taiga.svg", name: "Taiga" },
  ];
  const aprendiendoIcons = [
    { src: "/wordpress.svg", name: "WordPress" },
    { src: "/tailwind-css.svg", name: "TailwindCSS" },
    { src: "/typescript.svg", name: "TypeScript" },
    { src: "/nextjs.svg", name: "Next.js" },
    { src: "/angular.svg", name: "Angular" },
  ];

  return (
    <Container fluid id="tecnologias" className="py-5" data-aos="fade-up">
      <div className="d-flex align-items-center">
        <RiToolsFill size={26} className="icono-titulo" />
        <Separador title="Tecnologías" />
      </div>
      <p className="parrafo py-4">
        En mi viaje por el mundo del desarrollo web, he cultivado experiencias y
        habilidades en una variedad de tecnologías. Mi stack tecnológico
        incluye:
      </p>
      <Container fluid className="g-0">
        <Row className="align-items-stretch">
          <Col sm="12" md="6" lg="6" className="col-categoria">
            <Categorias title="Frontend" icons={frontendIcons} />
          </Col>
          <Col sm="12" md="6" lg="6" className="col-categoria">
            <Categorias title="Backend" icons={backendIcons} />
          </Col>
          <Col sm="12" md="6" lg="6" className="col-categoria">
            <Categorias title="Herramientas" icons={toolsIcons} />
          </Col>
          <Col sm="12" md="6" lg="6" className="col-categoria">
            <Categorias title="Aprendiendo" icons={aprendiendoIcons} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Tecnologias;
