import { useContext, useEffect, useState } from "react";
import { articuloContext } from "../contexts/itemsContext";
import { useParams } from "react-router-dom";
import "../styles/stylesCards.css";
import { CarritoContext } from "../contexts/carritoContext";
import {AlertasSweets}  from '../assets/SweetAlert'

export default function CardsDetalle() {
  const { id } = useParams();
  const { articulos, cargando } = useContext(articuloContext);
  const [artSeleccion, setArtSeleccion] = useState([]);
  const [contadorArticulo, setContadorArticulo] = useState(1)
  const {agregarArticuloCarrito, carritoGuardado} = useContext(CarritoContext)

  {
    useEffect(() => {
      if (!cargando) {
        const artSeleccion1 = articulos.find((art) => art.id === id);
        setArtSeleccion(artSeleccion1);
      }
    }, [cargando]);
  }

//CONTADOR

  function restarCont(){
    if (contadorArticulo<2){
        alert("No se permite esa cantidad")
        setContadorArticulo(1)
    }else{
        setContadorArticulo(contadorArticulo-1)        
    }
  }

  function sumarCont(){
    setContadorArticulo(contadorArticulo+1)
  }

         

  return (
    <><div className="div-cards-detalle">
      <h2>{artSeleccion.name}</h2>
      <img src={artSeleccion.avatar} alt="" className="card-img" />
      <p>{artSeleccion.description}</p>
      <h3>{artSeleccion.price}</h3>
      <div className="selectCantidad">
      <button onClick={restarCont}>-</button>
      <p>{contadorArticulo}</p>
      <button onClick={sumarCont}>+</button>
      </div>
      <button onClick={() => agregarArticuloCarrito(artSeleccion, contadorArticulo)}>Agregar al carrrito</button>
    </div>
      
    </>
  );
}
