import { Link } from "react-router-dom";

export default function Nav (){

    return(
        <nav className="nav">
            <ul className="nav-ul">
                <li><Link to='/' className='nav-link' >Inicio</Link> </li>
                <li><Link to='/novedades' className='nav-link'  >Novedades</Link> </li>
                <li><Link to='/articulos' className='nav-link' >Recitales</Link> </li>
                <li><Link to='/nosotros' className='nav-link' >Nosotros</Link> </li>
                <li><Link to='/carrito' className='nav-link' >Carrito</Link> </li>
                <li><Link to='/contacto' className='nav-link' >Contacto</Link></li>
                <li><Link to='/admin' className='nav-link' >Admin</Link> </li>
                <li><Link to='/login' className='nav-link' >Login</Link> </li>
            </ul>
        </nav>
    )
}