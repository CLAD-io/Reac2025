import { useContext } from "react"
import { articuloContext } from "../contexts/itemsContext"
import { CarritoContext } from "../contexts/carritoContext"
import CarritoCards from "./CarritoCards"
import { AlertasSweets2 } from "../assets/SweetAlert"

export default function Carrito(){
    const {carritoGuardado} = useContext(CarritoContext)

    return(
        <>
        <div>
        {carritoGuardado.length>0 ? carritoGuardado.map((items)=>(
            <CarritoCards article = {items} />
        )) : <> { AlertasSweets2 ('Carrito Vacio', 'info', 'Cerrar')} <p>Carrito vacio</p></>}
        </div>
        </>
    )
}