import './App.css'
import './styles/styles.css'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Main from './components/Main'
import Novedades from './components/Novedades'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './layouts/Inicio'
import Articulos from './components/Articulos'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Carrito from './components/Carrito'
import CardsDetalle from './components/CardsDetalle'
import Login from './components/Login'
import Admin from './components/Admin'
import { loginContext } from './contexts/loginContext'
import { useContext } from 'react'
import Login2 from './components/Login2'

function App() {

  const {adminLogeado,usuarioLogeado} = useContext(loginContext)

  return (
    <Router>
      <>
      <Banner/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/novedades' element={<Novedades/>} />
        <Route path='/articulos' element={<Articulos/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/carrito' element={usuarioLogeado ? <Carrito/> : <Navigate to={"/login"} replace/>}/>
        <Route path='contacto' element={<Contacto/>}/>
        <Route path='/card-detalles/:id' element={<CardsDetalle/>}/>
        <Route path='/login' element={<Login2/>}/>
        <Route path='/admin' element={ adminLogeado ? <Admin/> : <Navigate to={'/login'} replace/>}/>
      </Routes>
      <Footer/>
      </>
    </Router>
  )
}

export default App
