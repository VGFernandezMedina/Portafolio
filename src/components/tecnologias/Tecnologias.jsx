import { Col, Container, Row } from "react-bootstrap";
import "./Tecnologias.css";
import Separador from "../separador/Separador";
import Categorias from "../categorias/Categorias";
import { RiToolsFill } from "react-icons/ri";

const Tecnologias = () => {
  const frontendIcons = [
    { src: "/html.svg", name: "HTML", color: "#E34F26" },
    { src: "/css.svg", name: "CSS", color: "#1572B6" },
    { src: "/js.svg", name: "JavaScript", color: "#F7DF1E" },
    { src: "/typescript.svg", name: "TypeScript", color: "#3178C6" },
    { src: "/react.svg", name: "React", color: "#61DAFB" },
    { src: "/bootstrap.svg", name: "Bootstrap", color: "#7952B3" },
    { src: "/c++.svg", name: "C++", color: "#00599C" },
    { src: "/figma.svg", name: "Figma", color: "#F24E1E" },
  ];

  const backendIcons = [
    { src: "/node-js.svg", name: "NodeJS", color: "#339933" },
    { src: "/express-js.svg", name: "ExpressJS", color: "#FFFFFF" },
    { src: "/mongodb.svg", name: "MongoDB", color: "#47A248" },
  ];

  const toolsIcons = [
    { src: "/git.svg", name: "Git", color: "#F05032" },
    { src: "/github.svg", name: "GitHub", color: "#FFFFFF" },
    { src: "/bash.svg", name: "Bash", color: "#4EAA25" },
    { src: "/powershell.svg", name: "Powershell", color: "#5391FE" },
    { src: "/vsc.svg", name: "VSCode", color: "#007ACC" },
    { src: "/npm.svg", name: "npm", color: "#CB3837" },
    { src: "/trello.svg", name: "Trello", color: "#0052CC" },
    { src: "/taiga.svg", name: "Taiga", color: "#83C566" },
  ];

  const aprendiendoIcons = [
    { src: "/wordpress.svg", name: "WordPress", color: "#21759B" },
    { src: "/tailwind-css.svg", name: "TailwindCSS", color: "#06B6D4" },
    { src: "/nextjs.svg", name: "Next.js", color: "#FFFFFF" },
    { src: "/angular.svg", name: "Angular", color: "#DD0031" },
  ];

  return (
    <Container fluid id="tecnologias" className="py-5">
      <div className="d-flex align-items-center gap-3">
        <RiToolsFill size={26} className="icono-titulo" />
        <Separador title="Tecnologías" />
      </div>
      <p className="parrafo pt-4 pb-5">
        En mi viaje por el mundo del desarrollo web, he cultivado experiencias y
        habilidades en una variedad de tecnologías. Mi stack tecnológico
        incluye:
      </p>
      <Container fluid className="g-0">
        <Row className="align-items-stretch">
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-right"
          >
            <Categorias title="Frontend" icons={frontendIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-left"
          >
            <Categorias title="Backend" icons={backendIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-right"
          >
            <Categorias title="Herramientas" icons={toolsIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-left"
          >
            <Categorias title="Aprendiendo" icons={aprendiendoIcons} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Tecnologias;
