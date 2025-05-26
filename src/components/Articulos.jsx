import { useContext } from "react"
import { articuloContext } from "../contexts/itemsContext"
import Cards from "./Cards"
import '../styles/stylesCards.css'
import imgCargando from  '../assets/loading.gif'

export default function Articulos(){

    const {articulos, cargando, error} = useContext(articuloContext)
    
    if (cargando){
        return(
        <>
        <img src={imgCargando} alt=""  style={{ width:"50px"}}/>
        <p>Cargando Items</p>
        </>
        )
    }else if(error){
        <p>{error}</p>
    }else{
        return(
        <>
       <div className="cards">
            {articulos.map((producto)=>(
                <Cards articulos={producto}/>
            ))}
        </div>
        </>
    )}
}