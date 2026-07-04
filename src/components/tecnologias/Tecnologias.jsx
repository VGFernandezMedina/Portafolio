import { Col, Container, Row } from "react-bootstrap";
import "./Tecnologias.css";
import Separador from "../separador/Separador";
import Categorias from "../categorias/Categorias";
import { RiToolsFill } from "react-icons/ri";

const Tecnologias = () => {
  const frontendIcons = [
    { src: "/html.svg", name: "HTML5", color: "#E34F26" },
    { src: "/css.svg", name: "CSS3", color: "#1572B6" },
    { src: "/js.svg", name: "JavaScript", color: "#F7DF1E" },
    { src: "/typescript.svg", name: "TypeScript", color: "#3178C6" },
    { src: "/bootstrap.svg", name: "Bootstrap", color: "#7952B3" },
    { src: "/react.svg", name: "React", color: "#61DAFB" },
    { src: "/react-router.svg", name: "React Router", color: "#ce6161" },
    { src: "/axios.svg", name: "Axios", color: "#7a09dd" },
    /* { src: "/c++.svg", name: "C++", color: "#00599C" }, */
  ];

  const backendIcons = [
    { src: "/node-js.svg", name: "NodeJS", color: "#339933" },
    { src: "/express-js.svg", name: "ExpressJS", color: "#FFFFFF" },
    { src: "/mongodb.svg", name: "MongoDB", color: "#47A248" },
    { src: "/mongoose.svg", name: "Mongoose", color: "#e95757" },
  ];

  const toolsIcons = [
    { src: "/git.svg", name: "Git", color: "#F05032" },
    { src: "/github.svg", name: "GitHub", color: "#FFFFFF" },
    { src: "/bash.svg", name: "Bash", color: "#4EAA25" },
    { src: "/powershell.svg", name: "Powershell", color: "#5391FE" },
    { src: "/vsc.svg", name: "VSCode", color: "#007ACC" },
    { src: "/npm.svg", name: "npm", color: "#CB3837" },
    { src: "/postman.svg", name: "Postman", color: "#e07b60" },
    { src: "/trello.svg", name: "Trello", color: "#0052CC" },
    { src: "/taiga.svg", name: "Taiga", color: "#83C566" },
    { src: "/slack.svg", name: "Slack", color: "#d7c21e" },
    { src: "/figma.svg", name: "Figma", color: "#F24E1E" },
  ];

  const serviciosIntegracionesIcons = [
    { src: "/jwt.svg", name: "JWT", color: "#b561ce" },
    { src: "/mercado-pago.svg", name: "Mercado Pago", color: "#57c0e9" },
    { src: "/cloudinary.svg", name: "Cloudinary", color: "#5779e9" },
    { src: "/api-rest.svg", name: "REST APIs", color: "#09a1dd" },
    { src: "/emailjs.svg", name: "Emailjs", color: "#dd9309" },
  ];

  const despliegueIcons = [
    { src: "/render.svg", name: "Render", color: "#06B6D4" },
    { src: "/netlify.svg", name: "Netlify", color: "#FFFFFF" },
    { src: "/vercel.svg", name: "Vercel", color: "#DD0031" },
  ];

  const aprendiendoIcons = [
    /* { src: "/wordpress.svg", name: "WordPress", color: "#21759B" }, */
    { src: "/tailwind-css.svg", name: "TailwindCSS", color: "#06B6D4" },
    { src: "/nextjs.svg", name: "Next.js", color: "#FFFFFF" },
    { src: "/angular.svg", name: "Angular", color: "#DD0031" },
  ];

  return (
    <Container fluid id="tecnologias" className="py-5">
      <Separador
        title="Tecnologías"
        Icon={RiToolsFill}
        iconClass="tecnologias-icon"
      />
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
            data-aos-duration="1000"
          >
            <Categorias title="Frontend" icons={frontendIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Categorias title="Backend" icons={backendIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Categorias title="Herramientas" icons={toolsIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Categorias
              title="Servicios e Integraciones"
              icons={serviciosIntegracionesIcons}
            />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Categorias title="Despliegue" icons={despliegueIcons} />
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="col-categoria"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Categorias title="Aprendiendo" icons={aprendiendoIcons} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Tecnologias;
