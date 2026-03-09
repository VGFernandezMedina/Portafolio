import { Badge, Button, Card, Stack } from "react-bootstrap";
import "./CardC.css";
import { Link } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const CardC = ({ project }) => {
  console.log(project.github);
  return (
    <Card className="card-personalizada">
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
        <div className="d-flex gap-3 mb-2 title-card">
          <Card.Title className="card-titulo mb-0">{project.title}</Card.Title>
          <span className={`status-card ${project.status}`}>
            <span className="punto-card"></span>
            {project.span}
          </span>
        </div>
        <Card.Text className="card-texto">{project.description}</Card.Text>
        <div className="card-buttons d-flex gap-3 mb-4">
          {project.web && (
            <Button
              as="a"
              href={project.web}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex justify-content-center align-items-center gap-1"
            >
              <BiWorld className="icon-card" />
              Sitio Web
            </Button>
          )}
          {project.repoFront && (
            <Button
              as="a"
              href={project.repoFront}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex justify-content-center align-items-center gap-1"
            >
              <FaGithub className="icon-card" />
              Frontend
            </Button>
          )}
          {project.repoBack && (
            <Button
              as="a"
              href={project.repoBack}
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex justify-content-center align-items-center gap-1"
            >
              <FaGithub className="icon-card" />
              Backend
            </Button>
          )}
        </div>
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
    </Card>
  );
};

export default CardC;
