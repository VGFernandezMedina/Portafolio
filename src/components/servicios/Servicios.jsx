import { Card, Col, Container, Row } from "react-bootstrap";
import "./Servicios.css";
import Separador from "../separador/Separador";
import { GrServices } from "react-icons/gr";
import { IoIosRocket } from "react-icons/io";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BsTools } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <Container fluid id="servicios" className="py-5">
      <Separador
        title="Servicios"
        Icon={GrServices}
        iconClass="servicios-icon"
      />
      <p className="parrafo py-4">
        Ayudo a emprendedores, profesionales y pequeñas empresas a crear una
        presencia online profesional mediante sitios web rápidos, atractivos
        para el usuario y adaptados a las necesidades del cliente.
      </p>
      <Container fluid className="g-0">
        <Row className="align-items-stretch py-4">
          <Col
            sm="6"
            md="6"
            lg="3"
            data-aos="fade-up"
            data-aos-delay="0"
            className="pb-4"
          >
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <TbWorld size={26} className="servicios-icono" />
                <Card.Title className="pt-3 titulo-servicios">
                  Sitios web
                </Card.Title>
                <Card.Text className="descripcion-servicios pt-2">
                  Diseño y desarrollo de páginas web, responsive y optimizadas
                  para cualquier dispositivo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm="6"
            md="6"
            lg="3"
            data-aos="fade-up"
            data-aos-delay="200"
            className="pb-4"
          >
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <IoIosRocket size={26} className="servicios-icono" />
                <Card.Title className="pt-3">Landing Pages</Card.Title>
                <Card.Text className="descripcion-servicios pt-2">
                  Páginas enfocadas en presentar tu negocio, destacar servicios
                  y facilitar el contacto con clientes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm="6"
            md="6"
            lg="3"
            data-aos="fade-up"
            data-aos-delay="300"
            className="pb-4"
          >
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <HiOutlineLightningBolt size={26} className="servicios-icono" />
                <Card.Title className="pt-3">Optimización</Card.Title>
                <Card.Text className="descripcion-servicios pt-2">
                  Mejor rendimiento, velocidad de carga y mejor experiencia del
                  usuario para ofrecer un sitio rápido y eficiente.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm="6"
            md="6"
            lg="3"
            data-aos="fade-up"
            data-aos-delay="400"
            className="pb-4"
          >
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <BsTools size={26} className="servicios-icono" />
                <Card.Title className="pt-3">Soporte</Card.Title>
                <Card.Text className="descripcion-servicios pt-2">
                  Actualización, corrección y mejoras continuas para mantener tu
                  sitio siempre al día.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="py-5 publicidad-servicio border" data-aos="fade">
          <h2>¿Buscás una página web para tu negocio?</h2>
          <p className="pb-2">
            Conocé los planes disponibles, los servicios adicionales y cómo
            trabajo en cada proyecto.
          </p>
          <Link to="" className="btn btn-servicios">
            <span className="m-0">Ver planes y servicios</span>
          </Link>
        </div>
      </Container>
    </Container>
  );
};

export default Servicios;
