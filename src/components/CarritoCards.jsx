import { useContext } from "react"
import { CarritoContext } from "../contexts/carritoContext"


export default function CarritoCards({article}){

    const {eliminarArticuloCarrito} = useContext(CarritoContext)


    return(
        <div className="carrito-cards">
            <img src={article.avatar} alt="" className="image-art"/>
            <h3 className="art-titulo">{article.name}</h3>
            <p className="desc-art">{article.description}</p>
            <p className="cantidad">{article.cantidad}</p>
            <div className='art-precio-uni'>
                <p>Precio unitario</p>
             <p>{article.price}</p>
             </div>
             <h3 className='art-precio'>Total: ${article.price*article.cantidad}</h3>
            <button className='btn-eliminar' onClick={()=> eliminarArticuloCarrito(article.id)}>X</button>
        </div>
    )
}