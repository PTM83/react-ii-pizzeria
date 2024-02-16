import { useState, useEffect } from 'react'
import { getDataObject } from '../services/getDataFunction.js'

export const useProductCount = () => {
    const [count, setCount] = useState({})
    const [totalPay, setTotalPay] = useState(0)

    //Botón que modifica la cantidad agregar de pizza en la vista Home y en Details
    const toggleButton = (id, price) => {

        const currentDate = new Date().toLocaleString();

        setCount( (prevCount) => ({
            ...prevCount,
            [id]:{
                count: (prevCount[id]?.count || 0) + 1, // Increment the count
                date: [...(prevCount[id]?.date || []), currentDate], // Append the new date to the array
                total: (prevCount[id]?.total || 0) + price,
                },
             }));
    };
    useEffect(()=>{
        const newTotalPay = getDataObject(count, 'total')
        setTotalPay(newTotalPay)
    },[count]);

    //Función que permite setear Count en la vista Resume
    const handleQuantityChange = (id, newQuantity, price) => {

        setCount(prevCount => ({
            ...prevCount,
            [id]: {
                ...prevCount[id],
                count: newQuantity, // Update the count based on the new quantity
                total: newQuantity*price, //Update the count based on Final payment
                // Remember to adjust this if your state structure differs
            },
        }));
    };

    return { count, setCount, toggleButton, handleQuantityChange, totalPay };
}


