import {
  Col,
  Container,
  Image,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import "./Certificados.css";
import Separador from "../separador/Separador";
import { LiaCertificateSolid } from "react-icons/lia";
import modulo1 from "/modulo-1.png";
import modulo2 from "/modulo-2.png";
import modulo3 from "/modulo-3.png";
import fullstack from "/fullstack.png";
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
    <Container fluid id="certificados" className="py-5" data-aos="fade-up">
      <div className="d-flex align-items-center">
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
          <Col xs="6" sm="6" md="6" lg="3" className="col-certificados">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={
                <Tooltip id="tooltip1">
                  Creación y Diseño de páginas web
                </Tooltip>
              }
            >
              <div
                onClick={() => handleShow(modulo1)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={modulo1}
                  alt="certificado-modulo1"
                  fluid
                  className="certificados-img"
                />
              </div>
            </OverlayTrigger>
          </Col>
          <Col xs="6" sm="6" md="6" lg="3" className="col-certificados">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={
                <Tooltip id="tooltip1">Desarrollo web con React</Tooltip>
              }
            >
              <div
                onClick={() => handleShow(modulo2)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={modulo2}
                  alt="certificado-modulo2"
                  fluid
                  className="certificados-img"
                />
              </div>
            </OverlayTrigger>
          </Col>
          <Col xs="6" sm="6" md="6" lg="3" className="col-certificados">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={
                <Tooltip id="tooltip1">Integración de base de datos</Tooltip>
              }
            >
              <div
                onClick={() => handleShow(modulo3)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={modulo3}
                  alt="certificado-modulo3"
                  fluid
                  className="certificados-img"
                />
              </div>
            </OverlayTrigger>
          </Col>
          <Col xs="6" sm="6" md="6" lg="3" className="col-certificados">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={<Tooltip id="tooltip1">Desarrollador Fullstack</Tooltip>}
            >
              <div
                onClick={() => handleShow(fullstack)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={fullstack}
                  alt="certificado-fullstack"
                  fluid
                  className="certificados-img"
                />
              </div>
            </OverlayTrigger>
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
