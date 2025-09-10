import { Badge, Card, Col, Container, Row, Stack } from "react-bootstrap";
import "./Proyectos.css";
import Separador from "../separador/Separador";
import Ecommerce from "/Ecommerce.png";
import Veterinaria from "/Veterinaria.png";
import { GoProjectRoadmap } from "react-icons/go";

const Proyectos = () => {
  return (
    <Container fluid className="py-5">
      <div className="d-flex align-items-center">
        <GoProjectRoadmap size={24} className="icono-titulo" />
        <Separador title="Proyectos" />
      </div>
      <p className="parrafo py-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        deserunt dicta aperiam hic voluptate? Quasi est ipsum sunt magni vero
        ipsa, veritatis exercitationem quisquam, eaque illum ratione. Iste, et
        exercitationem!
      </p>
      <Container fluid className="g-0">
        <Row>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="pb-4 d-flex justify-content-center"
          >
            <Card className="card-personalizada">
              <div className="card-img-container">
                <Badge className="card-etiqueta-img">FullStack</Badge>
                <Card.Img
                  variant="top"
                  src={Veterinaria}
                  className="img-fluid"
                />
              </div>
              <Card.Body className="card-body d-flex flex-column">
                <Card.Title className="card-titulo">Veterinaria</Card.Title>
                <Card.Text className="card-texto">
                  Aplicación web para la gestión de una veterinaria,
                  desarrollada en equipo. Permite administrar usuarios,
                  mascotas, servicios y pagos en línea mediante integración con
                  Mercado Pago.
                </Card.Text>
                <div className="mt-auto">
                  <Stack direction="horizontal" gap={2} className="flex-wrap">
                    <Badge className="card-etiqueta">MongoDB</Badge>
                    <Badge className="card-etiqueta">Express</Badge>
                    <Badge className="card-etiqueta">React</Badge>
                    <Badge className="card-etiqueta">Node.js</Badge>
                  </Stack>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="pb-4 d-flex justify-content-center"
          >
            <Card className="card-personalizada">
              <div className="card-img-container">
                <Badge className="card-etiqueta-img">Frontend</Badge>
                <Card.Img variant="top" src={Ecommerce} />
              </div>
              <Card.Body className="card-body d-flex flex-column">
                <Card.Title className="card-titulo">E-commerce</Card.Title>
                <Card.Text className="card-texto">
                  Proyecto frontend de un ecommerce desarrollado con React.
                  Incluye catálogo de productos, filtros por categorías y
                  marcas, y un diseño responsivo con Bootstrap.
                </Card.Text>
                <div className="mt-auto">
                  <Stack direction="horizontal" gap={2} className="flex-wrap">
                    <Badge className="card-etiqueta">React</Badge>
                    <Badge className="card-etiqueta">Bootstrap</Badge>
                    <Badge className="card-etiqueta">JavaScript</Badge>
                    <Badge className="card-etiqueta">CSS</Badge>
                  </Stack>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Proyectos;
