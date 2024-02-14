import { useNavigate } from 'react-router-dom'
//CSS
import '../assets/NavBar.css'


export const NavbarPizzeria = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    return(
        <nav className='container-navigation'>
            <ul className='list-navBar'>
                <li onClick={goToHome}> Pizzería Mamma Mía! </li>
                <li> Carrito </li>
            </ul>


        </nav>
    )
}