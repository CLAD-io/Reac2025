import { use, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { crearUsuario, loginEmailPass } from "../auth/firebase";
import { AlertasSweets3, AlertasSweets2 } from "../assets/SweetAlert";
import { Helmet } from "react-helmet";



export default function Login2() {

    const [usuarioReg, setUsuarioReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [usuarioInicio, setUsuarioInicio] = useState('')
    const [passwordInicio, setPasswordInicio] = useState('')
    const reDirigir = useNavigate()
    const {login, user, logout, admin, logearGmailAuth} = useContext(AuthContext)
    const [show, setShow] = useState(true)



// FUNCION PARA CERRAR LA SESION Y BORRAR EL TOKEN ALMACENADO EN EL LOCAL STORAGE

function cerrarSesion(){
  logout()
  AlertasSweets3('Sesion cerrada')
  reDirigir('/novedades')

}

// FUNCION PARA REGISTRAR USUARIO -------------------------------------
  function registrarUsuario(e){
    e.preventDefault()
    crearUsuario(usuarioReg, passwordReg)
    console.log()
    
  }

// FUNCION PARA INICIAR SESION CON USUARIO YA REGISTRADO -------------------------------------
  function inicioSesionUserReg(e){
    e.preventDefault()
    loginEmailPass(usuarioInicio, passwordInicio)
      .then((UsuarioLogin)=>{
      login(usuarioInicio) // VERIFICA EN EL EL AUTHCONTEXT SI ESE USUARIO CORRESPONDE AL USUARIO ADMINISTRADOR
      AlertasSweets3("Inicio correcto")
      reDirigir('/')

    })
      .catch((error) =>{
        if(error == "auth/invalid-credential"){
          AlertasSweets2("Credenciales Inválidas", "error", "Cerrar")
        }
        if(error == "auth/invalid-email"){
          AlertasSweets2("Mail Inválido", "error", "Cerrar")
        }
        if(error == "auth/too-many-requests"){
          AlertasSweets2("Demasiados intentos, intente mas tarde", "error", "Cerrar")
        }
        console.log("error en el Login ========>  " + error)
      
    })
  }

  // FUNCION PARA INICIAR SESION CON USUARIO DE GMAIL -------------------------------------

  function loginGmail(){
    // Llama a la funcion que esta en el AuthContext
    logearGmailAuth()
  }



  const handleShow = (e)=>{
    e.preventDefault()
    setShow(!show)
  }


  
  if (user || admin){
    return(
      <>
      <Helmet>
            <title>Sesion Activa | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
          <p>Usuario: {user}</p>
          <button onClick={ ()=> cerrarSesion()} >Cerrar sesion actual</button>
      </>
  )}
  if (!user && show){
    return(
      <>
      <Helmet>
            <title>Iniciar Sesion | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
      {/* Iniciar sesion con Email y password -------------------------------------   */}
      <div className="form-logeo">
       <form onSubmit={inicioSesionUserReg} className="forms-login">
        <h2>Iniciar sesion Usuario</h2>
        <div className="forms-login">
          <label>Email</label>
          <input type="text" name="usuario" value={usuarioInicio} onChange={(evento) => setUsuarioInicio(evento.target.value) } autoComplete="off" required/>
          <label>Password</label>
          <input type="text" name="password" value={passwordInicio} onChange={(evento) => setPasswordInicio(evento.target.value)}/>
          <button type="submit" className="btn-form">Iniciar sesion</button>
        </div>
      </form>
      </div>
      <a className="link-logeo" onClick={handleShow}>No tienes cuenta? Registrate</a>
      </>
    )}

    if (!user && !show){
      return(
      <div>
        <Helmet>
            <title>Registrar usuario | RouteTikcs!</title>
            <meta name="description" content="¡Explora todo los eventos!." />
        </Helmet>
       {/* Registro de usuario -------------------------------------   */}
        <div className="form-logeo">
       <form onSubmit={registrarUsuario} className="forms-login">
        <h2>Registrarse</h2>
        <div className="forms-login">
          <label>Usuario</label>
          <input type="text" name="usuario" value={usuarioReg} onChange={(evento) => setUsuarioReg(evento.target.value) } autoComplete="off" required/>
          <label>Password</label>
          <input type="text" name="password" value={passwordReg} onChange={(evento) => setPasswordReg(evento.target.value)}/>
          <button type="submit" className="btn-form">Registrarme</button>
        </div>
      </form>
      </div>
      <p className="link-logeo" onClick={handleShow}>Ya tienes cuenta? <span>Iniciar sesion</span></p>
      <p className="link-logeo" onClick={loginGmail}>Tienes cuenta de Gmail? <span>Iniciar sesion con gmail</span></p>
      </div>
      )
    }
}
