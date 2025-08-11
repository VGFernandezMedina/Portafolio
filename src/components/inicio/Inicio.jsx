import { Button, Container } from "react-bootstrap";
import "./Inicio.css";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Inicio = () => {
  return (
    <Container fluid className="inicio py-5">
      <h3 className="pb-3 pt-5">Víctor Gabriel Fernández Medina</h3>
      <h1>
        Desarrollador <br /> FullStack
      </h1>
      <span className="pt-4 d-flex gap-3 align-items-center">
        <span className="punto"></span>Disponible para trabajar
      </span>
      <a href="" className="py-4">
        <Button>
          <FaCloudDownloadAlt className="icon-download" />
          Descargar CV
        </Button>
      </a>
    </Container>
  );
};

export default Inicio;
