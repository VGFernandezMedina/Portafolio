import Inicio from "../components/inicio/Inicio";
import SobreMi from "../components/sobremi/SobreMi";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="bg-homepage">
      <Inicio />
      <SobreMi />
    </div>
  );
};

export default HomePage;
