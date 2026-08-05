import { Button, Col, Container, Row } from "react-bootstrap";
import "./Proyectos.css";
import Separador from "../separador/Separador";
import { GoProjectRoadmap } from "react-icons/go";
import proyectos from "../../data/projectsData";
import CardC from "../card/CardC";
import {
  IoArrowForward,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Proyectos = () => {
  return (
    <Container fluid id="proyectos" className="py-5">
      <Separador
        title="Proyectos"
        Icon={GoProjectRoadmap}
        iconClass="proyectos-icon"
      />
      <p className="parrafo pt-4 pb-5">
        Estos proyectos representan un paso más en mi crecimiento como
        desarrollador, donde aplico constantemente los conocimientos adquiridos
        en este camino de la programación.
      </p>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button className="btn-allproject">
          <p className="m-0">Ver los proyectos</p>
          <IoArrowForward />
        </Button>

        <div className="d-flex gap-2">
          <Button variant="link" className="swiper-prev btn-project">
            <IoChevronBack className="icon-project" />
          </Button>

          <Button variant="link" className="swiper-next btn-project">
            <IoChevronForward className="icon-project" />
          </Button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2,
          },
        }}
      >
        {proyectos.map((project) => (
          <SwiperSlide key={project.id}>
            <div
              className="d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <CardC project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Proyectos;

/* 

<Container fluid className="g-0">
        <Row>
          {proyectos.map((project) => (
            <Col
              key={project.id}
              xs="12"
              sm="6"
              md="6"
              lg="6"
              className="pb-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <CardC project={project} />
            </Col>
          ))}
        </Row>
      </Container>

*/
