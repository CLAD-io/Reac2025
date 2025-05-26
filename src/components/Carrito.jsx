import { useContext } from "react"
import { articuloContext } from "../contexts/itemsContext"
import { CarritoContext } from "../contexts/carritoContext"
import CarritoCards from "./CarritoCards"

export default function Carrito(){
    const {carritoGuardado} = useContext(CarritoContext)

    return(
        <>
        <div>
        {carritoGuardado.map((items)=>(
            <CarritoCards article = {items} />
        ))}
        </div>
        </>
    )
}