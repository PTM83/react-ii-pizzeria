import { useContext } from 'react'
import { ContextPizzeria } from '../context/ContextPizzeria.jsx'

//     "desc": "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
//     "id": "P001",
//     "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
//     "ingredients": ["mozzarella", "tomates", "jamón", "orégano"],
//     "name": "napolitana",
//     "price": 5950

export const CardPizza = () => {

    const { infoPizzas } = useContext(ContextPizzeria);

    return (
        <section>
            {infoPizzas && infoPizzas.map(pizza=>(
            <div key={pizza.id}>
                <picture>
                    <img src={pizza.img} alt={pizza.name} />
                </picture>

                <article>
                    <header>{pizza.name}</header>
                    <h3>Ingredientes</h3>

                    <ul>
                        {pizza.ingredients.map( (ingredient,index)=> (
                        <li key={index}> {ingredient} </li>
                        ))}
                    </ul>

                    <h1>${pizza.price}</h1>
                </article>
            </div>
            ))}

        </section>
    )
}