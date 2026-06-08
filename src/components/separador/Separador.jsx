import "./Separador.css";

const Separador = ({ title, Icon, iconClass }) => {
  return (
    <div className="titulo">
      <div className={`icon-wrapper-homepage ${iconClass}`}>
        <Icon size={24} className="icono-titulo" />
      </div>
      <h2 data-aos="fade-right">{title}</h2>
    </div>
  );
};

export default Separador;
