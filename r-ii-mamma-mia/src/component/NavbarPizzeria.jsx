import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextPizzeria } from '../context/ContextPizzeria.jsx';
//CSS
import '../assets/NavBar.css'


export const NavbarPizzeria = () => {

    const { count, totalPay } = useContext(ContextPizzeria)
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    return(
        <nav className='container-navigation'>
            <ul className='list-navBar'>
                <li onClick={goToHome}> Pizzería Mamma Mía! </li>
                <li> ${totalPay} </li>
            </ul>
        </nav>
    )
}