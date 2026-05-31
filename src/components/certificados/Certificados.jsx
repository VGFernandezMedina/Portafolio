import { Col, Container, Image, Modal, Row, Tooltip } from "react-bootstrap";
import "./Certificados.css";
import Separador from "../separador/Separador";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdVerified } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import modulo1 from "/modulo-1.png";
import modulo2 from "/modulo-2.png";
import modulo3 from "/modulo-3.png";
import diseñoUI from "/Certificado-Diseño-UI.jpg";
import fullstack from "/fullstack.png";
import logica from "/Certificado-Logica.png";
import typescript from "/Certificado-TypeScript.jpg";
import { useState } from "react";

const Certificados = () => {
  const [show, setShow] = useState(false);
  const [imgSeleccionada, setImgSeleccionada] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setImgSeleccionada(img);
    setShow(true);
  };

  return (
    <Container fluid id="certificados" className="py-5">
      <div className="d-flex align-items-center gap-3">
        <LiaCertificateSolid size={26} className="icono-titulo" />
        <Separador title="Certificados" />
      </div>
      <p className="parrafo py-4">
        Estos certificados respaldan mis conocimientos y habilidades adquiridas
        a lo largo de distintos cursos y capacitaciones, demostrando mi
        compromiso con el crecimiento profesional.
      </p>
      <Container fluid className="g-0">
        <Row>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">
                      Creación y Diseño de páginas web
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Enero 2025</p>
                    </div>
                  </div>
                </div>

                <div className="card-back" onClick={() => handleShow(modulo1)}>
                  <Image
                    src={modulo1}
                    alt="certificado-modulo1"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">
                      Desarrollo web con React
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Julio 2025</p>
                    </div>
                  </div>
                </div>

                <div className="card-back" onClick={() => handleShow(modulo2)}>
                  <Image
                    src={modulo2}
                    alt="certificado-modulo2"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">
                      Integración de base de datos
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Agosto 2025</p>
                    </div>
                  </div>
                </div>

                <div className="card-back" onClick={() => handleShow(modulo3)}>
                  <Image
                    src={modulo3}
                    alt="certificado-modulo2"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">
                      Desarrollador Fullstack
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Octubre 2025</p>
                    </div>
                  </div>
                </div>

                <div
                  className="card-back"
                  onClick={() => handleShow(fullstack)}
                >
                  <Image
                    src={fullstack}
                    alt="certificado-modulo2"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">Diseño UI con Figma</p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Noviembre 2025</p>
                    </div>
                  </div>
                </div>

                <div className="card-back" onClick={() => handleShow(diseñoUI)}>
                  <Image
                    src={diseñoUI}
                    alt="certificado-modulo2"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">
                      Especialización en TypeScript
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Mayo 2026</p>
                    </div>
                  </div>
                </div>

                <div
                  className="card-back"
                  onClick={() => handleShow(typescript)}
                >
                  <Image
                    src={typescript}
                    alt="certificado-modulo2"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs="6"
            sm="4"
            md="4"
            lg="3"
            className="col-certificados"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <div className="card-certificado">
              <div className="card-certificado-inner">
                <div className="div-certificado card-front">
                  <div className="w-100 h-100 d-flex flex-column justify-content-evenly align-items-center">
                    <MdVerified className="icon-check-certificado" />
                    <p className="m-0 title-certificado">
                      Logica de programación
                    </p>
                    <div className="d-flex align-items-center gap-2">
                      <FaCalendar className="icon-certificado" />
                      <p className="m-0 fecha-certificado">Marzo 2026</p>
                    </div>
                  </div>
                </div>

                <div className="card-back" onClick={() => handleShow(logica)}>
                  <Image
                    src="/Certificado-Logica.png"
                    alt="certificado"
                    fluid
                    className="img-certificado-back"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="text-center">
          {imgSeleccionada && (
            <Image src={imgSeleccionada} alt="Certificado" fluid />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Certificados;
