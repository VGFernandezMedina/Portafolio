import {
  Col,
  Container,
  Image,
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

const Certificados = () => {
  return (
    <Container fluid id="certificados" className="py-5">
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
          <Col sm="12" md="6" lg="3" className="pb-5">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={
                <Tooltip id="tooltip1">
                  Creación y Diseño de páginas web
                </Tooltip>
              }
            >
              <div>
                <Image src={modulo1} alt="" className="certificados-img" />
              </div>
            </OverlayTrigger>
          </Col>
          <Col sm="12" md="6" lg="3" className="pb-5">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={
                <Tooltip id="tooltip1">Desarrollo web con React</Tooltip>
              }
            >
              <div>
                <Image src={modulo2} alt="" className="certificados-img" />
              </div>
            </OverlayTrigger>
          </Col>
          <Col sm="12" md="6" lg="3" className="pb-5">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={
                <Tooltip id="tooltip1">Integración de base de datos</Tooltip>
              }
            >
              <div>
                <Image src={modulo3} alt="" className="certificados-img" />
              </div>
            </OverlayTrigger>
          </Col>
          {/* <Col sm="12" md="6" lg="3" className="pb-5">
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 200 }}
              overlay={<Tooltip id="tooltip1">Certificado de React</Tooltip>}
            >
              <div>
                <Image src="" alt="" className="certificados-img" />
              </div>
            </OverlayTrigger>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default Certificados;
