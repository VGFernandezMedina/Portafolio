import "./BackButton.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to={-1}
      data-aos="fade-left"
      className="return-link text-decoration-none"
    >
      <div className="div-return">
        <IoIosArrowBack className="return-icon" />
        <p className="my-0">Volver</p>
      </div>
    </Link>
  );
};

export default BackButton;
