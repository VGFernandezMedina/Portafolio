import { Col, Container, Image, Row } from "react-bootstrap";
import "./SobreMi.css";
import Separador from "../separador/Separador";
import perfil from "/perfil.jpg";

const SobreMi = () => {
  return (
    <Container fluid className="border">
      <Separador title="Sobre mi" />
      <Container fluid className="cont-parrafo">
        <Row>
          <Col sm="12" md="6" lg="6" className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nemo, distinctio sapiente, sunt iste dicta iusto doloribus
              asperiores aperiam, quis rerum! Deserunt nemo porro cum quis
              molestiae sequi, facilis tempore?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              quis, illo ex eos nam non animi, inventore cupiditate beatae alias
              eaque accusamus rerum pariatur laborum voluptas, eligendi
              reprehenderit labore quo?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              quis, illo ex eos nam non animi, inventore cupiditate beatae alias
              eaque accusamus rerum pariatur laborum voluptas, eligendi
              reprehenderit labore quo?
            </p>
          </Col>
          <Col
            sm="12"
            md="6"
            lg="6"
            className="text-center d-flex align-items-center"
          >
            <Image src={perfil} roundedCircle fluid className="img-perfil" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SobreMi;
