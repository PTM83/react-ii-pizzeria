import { createContext, useState } from 'react'
//Extract hooks function
import { hooksPizza } from '../hooks/hooksPizzeria.js'
//Data
import { useProductCount } from '../services/pizzaFunction.js'

export const ContextPizzeria = createContext();

export const PizzaProvider = ({children}) => {

    const { count, toggleButton, totalPay } = useProductCount()
    const { infoPizzas } = hooksPizza()

    return (
        <ContextPizzeria.Provider value={{ infoPizzas, count, toggleButton, totalPay }}>
            {children}
        </ContextPizzeria.Provider>
    )
}