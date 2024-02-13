//CSS
import '../assets/NavBar.css'


export const NavbarPizzeria = () => {
    return(
        <nav className='container-navigation'>
            <ul className='list-navBar'>
                <li> Pizzería Mamma Mía! </li>
                <button><li> Carrito </li></button>
            </ul>


        </nav>
    )
}