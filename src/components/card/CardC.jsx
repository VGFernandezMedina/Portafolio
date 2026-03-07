import { Badge, Card, Stack } from "react-bootstrap";
import "./CardC.css";
import { Link } from "react-router-dom";

const CardC = ({ project }) => {
  return (
    <Card className="card-personalizada">
      <Link className="card-link">
        <div className="card-img-container">
          <Badge className="card-etiqueta-img">{project.badgeImg}</Badge>
          <Card.Img
            variant="top"
            src={project.img}
            className="img-fluid"
            alt={project.title}
          />
        </div>
        <Card.Body className="card-body d-flex flex-column">
          <Card.Title className="card-titulo">{project.title}</Card.Title>
          <Card.Text className="card-texto">{project.description}</Card.Text>
          <div className="mt-4">
            <Stack direction="horizontal" gap={2} className="flex-wrap">
              {project.technologies.map((tech, index) => (
                <Badge className="card-etiqueta" key={index}>
                  {tech}
                </Badge>
              ))}
            </Stack>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CardC;
