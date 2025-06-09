import { use, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { loginContext } from "../contexts/loginContext";
import { crearUsuario, loginEmailPass } from "../auth/firebase";
import { AlertasSweets3, AlertasSweets2 } from "../assets/SweetAlert";


export default function Login2() {

    
    const [usuario, setUsuario] = useState('')
    const [password , setPassword] = useState('')
    const [usuarioReg, setUsuarioReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [usuarioInicio, setUsuarioInicio] = useState('')
    const [passwordInicio, setPasswordInicio] = useState('')
    const reDirigir = useNavigate()
    const {login, user, logout} = useContext(AuthContext)
    const {ingresoEgresoAdmin,ingresoEgresoUser} = useContext(loginContext)

  function handlerSubmit(e) {
    e.preventDefault();
    if (usuario === "admin" && password === "1234"){
      AlertasSweets3("Inicio correcto")
      login(usuario)
      reDirigir('/')
      ingresoEgresoAdmin()
      ingresoEgresoUser()

    } else {
      AlertasSweets2('Credenciales invalidas', 'error', 'Reintentar');
    }
    setPassword('')
    setUsuario('')
  }

function cerrarSesion(){
  logout()
  AlertasSweets3('Sesion cerrada')
  ingresoEgresoAdmin()
  ingresoEgresoUser()
  reDirigir('/novedades')

}

  if (user == 'admin'){
    return(<button onClick={ ()=> cerrarSesion()} >Cerrar Sesion Administrador</button>)
  }
  if (user){return(<button onClick={ ()=> cerrarSesion()} >Cerrar Sesion Usuario</button>)}
// Funcion Registrar usuario
  function registrarUsuario(e){
    e.preventDefault()
    crearUsuario(usuarioReg, passwordReg)
    console.log()
    AlertasSweets3("¡Se registró el usuario!")
  }

// Funcion iniciar sesion con usuario ya registrado
  function inicioSesionUserReg(e){
    e.preventDefault()
    loginEmailPass(usuarioInicio, passwordInicio)
      .then((UsuarioLogin)=>{
      ingresoEgresoUser()
      login(usuarioInicio)
      AlertasSweets3("Inicio correcto")
      reDirigir('/')

    })
      .catch((error) =>{
      alert(error)
    })

  }



  return (
    <>
    {/* Seccion de LOGIN */}
    <div className="form-logeo">

      {/* Inicio de sesion como ADMIN ------------------------------------- */}

      <form onSubmit={handlerSubmit} className="forms-login">
        <h2>Iniciar sesion</h2>
        <div className="forms-login">
          <label>Usuario</label>
          <input type="text" name="usuario" value={usuario} onChange={(evento) => setUsuario(evento.target.value)} autoComplete="off" required/>
          <label>Password</label>
          <input type="password" name="password1" value={password} onChange={(evento) => setPassword(evento.target.value)}/>
          <button type="submit" className="btn-form">Iniciar</button>
        </div>
      </form>

       {/* Registro de usuario -------------------------------------  */}

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

      {/* Iniciar sesion con Email y password -------------------------------------  */}

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
    </>
  );
}
