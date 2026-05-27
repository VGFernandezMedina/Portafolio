import "./ProjectDetail.css";
import { useParams, Link } from "react-router-dom";
import proyectos from "../data/projectsData";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaArrowLeft,
  FaCode,
  FaGithub,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { BiSolidCategory, BiWorld } from "react-icons/bi";

const ProjectDetail = () => {
  const { id } = useParams();

  const proyecto = proyectos.find((project) => project.id === Number(id));

  if (!proyecto) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <Container fluid className="text-white py-4">
      <Row className="p-0 m-0">
        <Col sm="" md="" lg="6" className="px-0">
          <Link to="/" className="return-link text-decoration-none text-white">
            <div className="div-return">
              <FaArrowLeft />
              <p className="my-0">Volver al Inicio</p>
            </div>
          </Link>
          <Carousel className="carousel-detail-page" controls={false}>
            <Carousel.Item interval={1000}>
              <img
                src={proyecto.img}
                alt={proyecto.title}
                className="img-fluid"
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={proyecto.img2}
                alt={proyecto.title}
                className="img-fluid"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={proyecto.img3}
                alt={proyecto.title}
                className="img-fluid"
              />
            </Carousel.Item>
          </Carousel>
          <div className="mt-4 d-flex gap-4">
            <div className="div-col1-detail-page">
              <div className="">
                <FaRegCalendarAlt />
                Fecha
              </div>
              {proyecto.date}
            </div>
            <div className="div-col1-detail-page">
              <div className="">
                <BiSolidCategory />
                Categoría
              </div>
              {proyecto.category}
            </div>
            <div className="div-col1-detail-page">
              <div className="">
                <FaCode />
                Servicio
              </div>
              Aplicación web
            </div>
          </div>
        </Col>
        <Col sm="" md="" lg="6" className="px-5">
          <div className="pb-4 title-div-detail-page">
            <h1 className="title-detail-page">{proyecto.title}</h1>
            <p className="mt-4">{proyecto.description}</p>
          </div>
          <div className="pb-5">
            <h5 className="title-detail-page">Tecnologías utilizadas</h5>
            <div className="d-flex gap-3 flex-wrap">
              {proyecto.techIcon?.map((tech, index) => (
                <div key={index} className="d-flex align-items-center">
                  <img src={tech.src} alt={tech.name} width="40" height="40" />
                </div>
              ))}
            </div>
          </div>
          <div className="pb-5">
            <h5 className="title-detail-page">Herramientas y recursos</h5>
            <div className="d-flex gap-3 flex-wrap">
              {proyecto.toolsIcon?.map((tech, index) => (
                <div key={index} className="d-flex align-items-center">
                  <img src={tech.src} alt={tech.name} width="40" height="40" />
                </div>
              ))}
            </div>
          </div>
          <div className="pb-5">
            <h5 className="pb-2 title-detail-page">Enlaces del Proyecto</h5>
            <div className="btn-details-page">
              {proyecto.web && (
                <Button
                  as="a"
                  href={proyecto.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiWorld className="icon-card" />
                  Sitio Web
                </Button>
              )}
              {proyecto.repoFront && (
                <Button
                  as="a"
                  href={proyecto.repoFront}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon-card" />
                  Frontend
                </Button>
              )}
              {proyecto.repoBack && (
                <Button
                  as="a"
                  href={proyecto.repoBack}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon-card" />
                  Backend
                </Button>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
