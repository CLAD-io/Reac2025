import { useContext, useEffect } from "react"
import { articuloContext } from "../contexts/articuloContext"
import Cards from "./Cards"
import '../styles/stylesCards.css'
import imgCargando from  '../assets/loading.gif'
import { AuthContext } from "../contexts/AuthContext"
import { Helmet } from "react-helmet"

export default function Articulos(){

    const {articulos, cargando, error} = useContext(articuloContext)
    const {verificacionLogeo} = useContext(AuthContext)

    //USO LA FUNCION VERIFICACIONLOGEO PARA LEER EL LOCALSTORAGE Y VER SI EL USUARIO SIGUE CONECTADO
    useEffect(()=> {
        verificacionLogeo()
    },[])

    if (cargando){
        return(
        <>
        <Helmet>
            <title>Entradas | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
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