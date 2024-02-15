import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextPizzeria } from '../context/ContextPizzeria.jsx';
//CSS
import '../assets/NavBar.css'


export const NavbarPizzeria = () => {

    const { totalPay } = useContext(ContextPizzeria)
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    const goToPay = () => {
        navigate('/orders')
    }

    return(
        <nav className='container-navigation'>
            <ul className='list-navBar'>
                <li onClick={goToHome}> Pizzería Mamma Mía! </li>
                <li onClick={goToPay}> ${totalPay} </li>
            </ul>
        </nav>
    )
}