import "./ProjectDetail.css";
import { useParams } from "react-router-dom";
import proyectos from "../data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();

  const proyecto = proyectos.find((project) => project.id === Number(id));

  if (!proyecto) {
    return <h1>Proyecto no encontrado</h1>;
  }

  return (
    <div className="text-white container py-5">
      <h1>{proyecto.title}</h1>

      <img src={proyecto.img} alt={proyecto.title} className="img-fluid" />

      <p className="mt-4">{proyecto.description}</p>
    </div>
  );
};

export default ProjectDetail;
