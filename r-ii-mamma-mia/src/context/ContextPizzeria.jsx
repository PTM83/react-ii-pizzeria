import { createContext, useState } from 'react'
//Extract hooks function
import { hooksPizza } from '../hooks/hooksPizzeria.js'

export const ContextPizzeria = createContext();

export const PizzaProvider = ({children}) => {

    const { infoPizzas } = hooksPizza()

    return (
        <ContextPizzeria.Provider value={{ infoPizzas }}>
            {children}
        </ContextPizzeria.Provider>
    )
}