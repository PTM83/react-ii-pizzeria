import { createContext, useState } from 'react'
//Extract hooks function
import { hooksPizza } from '../hooks/hooksPizzeria.js'
//Data
import { useProductCount } from '../services/pizzaFunction.js'

export const ContextPizzeria = createContext();

export const PizzaProvider = ({children}) => {

    const { count, setCount, toggleButton, handleQuantityChange, totalPay } = useProductCount()
    const { infoPizzas } = hooksPizza()

    return (
        <ContextPizzeria.Provider value={{
                infoPizzas,
                setCount,
                count,
                toggleButton,
                handleQuantityChange,
                totalPay
                 }}>
            {children}
        </ContextPizzeria.Provider>
    )
}