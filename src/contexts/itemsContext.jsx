import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const articuloContext = createContext();

export function ArticuloProvider({children}){
    const [articulos, setArticulos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

        {useEffect (()=>{
        
            fetch('https://6817f2995a4b07b9d1cd99fb.mockapi.io/productos')
                .then((resp)=> resp.json())
                .then((datos)=>{
                setCargando(false)
                setArticulos(datos)
                })
                .catch((err)=>{
                    setError('Hubo un error al querer cargar los datos')
                    setCargando(false)
                });  
        },[])
        }

        return(
            <articuloContext.Provider value={ {cargando, articulos, error}}>
                {children}
            </articuloContext.Provider>
        )

}