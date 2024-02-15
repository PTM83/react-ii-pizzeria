import { useParams } from 'react-router-dom'
import { useContext } from 'react'
//Context
import { ContextPizzeria } from '../context/ContextPizzeria.jsx'
//CSS
import '../assets/DescriptionPizza.css'

export const Description = () => {

    const { infoPizzas, toggleButton } = useContext(ContextPizzeria);
    const { id } = useParams()

    const filterPizza = infoPizzas.filter(pizza => pizza.id === id)[0]

    const { desc, ingredients, name, price, img } = filterPizza;

    return(
        <main className='main-Description'>
            <h2>{id}</h2>
            <article className='card-Description'>
                <picture className='pizza-image'>
                    <img src={img} alt={name}/>
                </picture>
                <section className='card-Content'>

                    <header className='pizzeria-header'>
                        <h1>{name}</h1>
                    </header>

                    <p>{desc}</p>

                    <h3>Ingredientes</h3>

                    <ul className='list-card'>
                        {ingredients.map((ingredient, index)=>(
                            <li key={index}> {ingredient} </li>
                        ))}
                    </ul>
                    <footer className='footer-Description'>
                        <h2>Precio: ${price}</h2>
                        <button onClick={()=>toggleButton(id, price)} className='button-add'>Add 🛒</button>
                    </footer>
                </section>
            </article>
        </main>
    )
}