import { Col, Container, Image, Row } from "react-bootstrap";
import "./SobreMi.css";
import Separador from "../separador/Separador";
import perfil from "/perfil.jpg";
import { LuUserRoundCheck } from "react-icons/lu";

const SobreMi = () => {
  return (
    <Container fluid className="py-5">
      <div className="d-flex align-items-center">
        <LuUserRoundCheck size={22} className="icono-titulo" />
        <Separador title="Sobre mi" />
      </div>
      <Container fluid className="cont-parrafo">
        <Row>
          <Col
            sm={{ span: 12, order: 1 }}
            md={{ span: 4, order: 2 }}
            lg={{ span: 4, order: 2 }}
            className="d-flex align-items-center justify-content-center py-4"
          >
            <Image src={perfil} roundedCircle fluid className="img-perfil" />
          </Col>

          <Col
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 8, order: 1 }}
            className="pt-4 g-0"
          >
            <p className="parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nemo, distinctio sapiente, sunt iste dicta iusto doloribus
              asperiores aperiam, quis rerum! Deserunt nemo porro cum quis
              molestiae sequi, facilis tempore?
            </p>
            <p className="parrafo">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              quis, illo ex eos nam non animi, inventore cupiditate beatae alias
              eaque accusamus rerum pariatur laborum voluptas, eligendi
              reprehenderit labore quo?
            </p>
            <p className="parrafo">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              quis, illo ex eos nam non animi, inventore cupiditate beatae alias
              eaque accusamus rerum pariatur laborum voluptas, eligendi
              reprehenderit labore quo?
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SobreMi;
