import { Col, Container, Row } from "react-bootstrap";
import "./Tecnologias.css";
import Separador from "../separador/Separador";
import Categorias from "../categorias/Categorias";

const Tecnologias = () => {
  const frontendIcons = [
    { src: "/html.svg", name: "HTML" },
    { src: "/css.svg", name: "CSS" },
    { src: "/js.svg", name: "JavaScript" },
    { src: "/react.svg", name: "React" },
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
    { src: "/terminal.svg", name: "Terminal" },
    { src: "/vsc.svg", name: "VSCode" },
    { src: "/npm.svg", name: "npm" },
  ];
  const aprendiendoIcons = [
    { src: "/public/wordpress.svg", name: "WordPress" },
  ];

  return (
    <Container fluid className="py-5 tecnologias">
      <Separador title="Tecnologias" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        deserunt dicta aperiam hic voluptate? Quasi est ipsum sunt magni vero
        ipsa, veritatis exercitationem quisquam, eaque illum ratione. Iste, et
        exercitationem!
      </p>
      <Container fluid className="">
        <Row className="py-3">
          <Col sm="12" md="6" lg="6">
            <Categorias title="Frontend" icons={frontendIcons} />
          </Col>
          <Col sm="12" md="6" lg="6">
            <Categorias title="Backend" icons={backendIcons} />
          </Col>
        </Row>
        <Row className="py-3">
          <Col sm="12" md="6" lg="6">
            <Categorias title="Herramientas" icons={toolsIcons} />
          </Col>
          <Col sm="12" md="6" lg="6">
            <Categorias title="Aprendiendo" icons={aprendiendoIcons} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Tecnologias;
