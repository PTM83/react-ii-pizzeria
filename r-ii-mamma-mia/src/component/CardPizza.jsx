import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextPizzeria } from '../context/ContextPizzeria.jsx'
//CSS
import '../assets/CardPizzeria.css'

//     "desc": "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
//     "id": "P001",
//     "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
//     "ingredients": ["mozzarella", "tomates", "jamón", "orégano"],
//     "name": "napolitana",
//     "price": 5950

export const CardPizza = () => {

    const { infoPizzas, toggleButton } = useContext(ContextPizzeria);

    const navigate = useNavigate();

    //Capturar el ID primero
    const goToDetails = (id) => {
        if(!id){
            return
        } else {
            navigate(`/description/${id}`);
        }
    }

    return (
        <section className='main-card'>
            {infoPizzas && infoPizzas.map(pizza=>(
            <div key={pizza.id} className='card-container'>
                <picture className='pizza-image'>
                    <img src={pizza.img} alt={pizza.name} />
                </picture>

                <article className='article-card'>
                    <header className='pizzeria-header'>
                        <h1>{pizza.name}</h1>
                    </header>

                    <h3>Ingredientes:</h3>

                    <ul className='list-card'>
                        {pizza.ingredients.map( (ingredient,index)=> (
                        <li key={index}> {ingredient} </li>
                        ))}
                    </ul>
                </article>

                <h1>$ {pizza.price.toLocaleString('es-ES')}</h1>

                <section className='button-container'>
                    <button className='button-details' onClick={()=> goToDetails(pizza.id)}>
                        Details 👀
                    </button>
                    <button onClick={()=> toggleButton(pizza.id, pizza.price)} className='button-add'>
                        Add 🛒
                    </button>
                </section>

            </div>
            ))}

        </section>
    )
}