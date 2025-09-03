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
    { src: "/trello.svg", name: "Trello" },
    { src: "/taiga.svg", name: "Taiga" },
  ];
  const aprendiendoIcons = [
    { src: "/wordpress.svg", name: "WordPress" },
    { src: "/tailwind-css.svg", name: "TailwindCSS" },
    { src: "/typescript.svg", name: "TypeScript" },
  ];

  return (
    <Container fluid className="py-5">
      <div className="d-flex align-items-center">
        <RiToolsFill size={24} className="icono-titulo" />
        <Separador title="Tecnologias" />
      </div>
      <p className="parrafo py-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        deserunt dicta aperiam hic voluptate? Quasi est ipsum sunt magni vero
        ipsa, veritatis exercitationem quisquam, eaque illum ratione. Iste, et
        exercitationem!
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
