import { Link } from "react-router-dom";
import "../styles/stylesCards.css";

export default function Cards({ articulos }) {
  

  return (
    <div className="cards-container">
      
      <h2 className="card-titulo">{articulos.name}</h2>
      <img src={articulos.avatar} alt={articulos.name} className="card-img" />
      <p>{articulos.descripcion}</p>
      <Link to={'/card-detalles/' + articulos.id  } state = {articulos}><button>Ver mas ...</button></Link>
    </div>
  );
}
