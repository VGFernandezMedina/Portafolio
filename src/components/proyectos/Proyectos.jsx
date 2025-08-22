import { Badge, Card, Col, Container, Row, Stack } from "react-bootstrap";
import "./Proyectos.css";
import Separador from "../separador/Separador";
import Ecommerce from "/Ecommerce.png";
import Veterinaria from "/Veterinaria.png";

const Proyectos = () => {
  return (
    <Container fluid>
      <Separador title="Proyectos" />
      <Container fluid className="py-5">
        <Row className="">
          <Col className="pb-4">
            <Card className="card-personalizada">
              <div className="card-img-container">
                <Badge className="card-etiqueta-img">FullStack</Badge>
                <Card.Img
                  variant="top"
                  src={Veterinaria}
                  className="img-fluid"
                />
              </div>
              <Card.Body className="card-body">
                <Card.Title className="card-titulo">Veterinaria</Card.Title>
                <Card.Text className="card-texto">
                  Aplicación web para la gestión de una veterinaria,
                  desarrollada en equipo. Permite administrar usuarios,
                  mascotas, servicios y pagos en línea mediante integración con
                  Mercado Pago.
                </Card.Text>
                <Stack direction="horizontal" gap={2}>
                  <Badge className="card-etiqueta">MongoDB</Badge>
                  <Badge className="card-etiqueta">Express</Badge>
                  <Badge className="card-etiqueta">React</Badge>
                  <Badge className="card-etiqueta">Node.js</Badge>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card-personalizada">
              <div className="card-img-container">
                <Badge className="card-etiqueta-img">Frontend</Badge>
                <Card.Img variant="top" src={Ecommerce} />
              </div>
              <Card.Body className="card-body">
                <Card.Title className="card-titulo">E-commerce</Card.Title>
                <Card.Text className="card-texto">
                  Proyecto frontend de un ecommerce desarrollado con React.
                  Incluye catálogo de productos, filtros por categorías y
                  marcas, y un diseño responsivo con Bootstrap.
                </Card.Text>
                <Stack direction="horizontal" gap={2}>
                  <Badge className="card-etiqueta">React</Badge>
                  <Badge className="card-etiqueta">Bootstrap</Badge>
                  <Badge className="card-etiqueta">JavaScript</Badge>
                  <Badge className="card-etiqueta">CSS</Badge>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Proyectos;
