import "./Categorias.css";

const Categorias = ({ title, icons }) => {
  return (
    <div className="category-box">
      <h3 className="text-center pb-2">{title}</h3>
      <div className="icons-grid">
        {icons.map((icon, i) => (
          <div key={i} className="icon-item">
            <img src={icon.src} alt={icon.name} />
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
