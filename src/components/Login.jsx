import { useContext } from "react"

import { loginContext } from "../contexts/loginContext";

export default function Login(){

     const {ingresoEgresoAdmin, adminLogeado,ingresoEgresoUser, usuarioLogeado} = useContext(loginContext)
    //   const [adminLogeado, setAdminLogeado] = useState(false);
    //   const [usuarioLogeado, setUsuarioLogeado] = useState(false);

        
    //     function ingresoEgresoAdmin(){
    //     setAdminLogeado(!adminLogeado)
    //     }
    //     
    return(

        <div className="btns-login">
            <button onClick={ingresoEgresoAdmin}>{adminLogeado ? 'Cerrar sesion Administrador' : 'Iniciar sesion' }</button>
            <button onClick={ingresoEgresoUser}>{ usuarioLogeado ? 'Cerrar Sesion User' : 'Iniciar Sesion User'}</button>
        </div>
    )
}