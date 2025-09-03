import { Card, Col, Container, Row } from "react-bootstrap";
import "./Servicios.css";
import Separador from "../separador/Separador";
import { GrServices } from "react-icons/gr";
import { IoIosDesktop } from "react-icons/io";
import { FaMobileAlt, FaRegStar } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";

const Servicios = () => {
  return (
    <Container fluid className="py-5">
      <div className="d-flex align-items-center">
        <GrServices size={22} className="icono-titulo" />
        <Separador title="Servicios" />
      </div>
      <p className="parrafo py-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        deserunt dicta aperiam hic voluptate? Quasi est ipsum sunt magni vero
        ipsa, veritatis exercitationem quisquam, eaque illum ratione. Iste, et
        exercitationem!
      </p>
      <Container fluid className="g-0">
        <Row className="align-items-stretch">
          <Col sm="12" md="6" lg="3" className="pb-4">
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <Card.Title className="pb-4">Páginas web</Card.Title>
                <IoIosDesktop size={24} />
                <Card.Text className="descripcion-servicios pt-4">
                  Páginas web responsivas con diseños creativos y atractivos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="3" className="pb-4">
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <Card.Title className="pb-4">Aplicaciones móviles</Card.Title>
                <FaMobileAlt size={24} />
                <Card.Text className="descripcion-servicios pt-4">
                  Aplicaciones móviles hechas con React Native
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="3" className="pb-4">
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <Card.Title className="pb-4">Rendimiento</Card.Title>
                <HiOutlineLightningBolt size={24} />
                <Card.Text className="descripcion-servicios pt-4">
                  Páginas web optimizadas para una mejor experiencia de usuario
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" lg="3" className="pb-4">
            <Card className="card-servicios">
              <Card.Body className="p-3">
                <Card.Title className="pb-4">SEO</Card.Title>
                <FaRegStar size={24} />
                <Card.Text className="descripcion-servicios pt-4">
                  Optimización para motores de búsqueda para mejor
                  posicionamiento
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Servicios;
