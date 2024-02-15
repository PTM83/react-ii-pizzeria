import { useState, useEffect } from 'react'

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
        //    const idPizza = Object.keys(count) //<--Here I have id of each Pizza
        const valuePizza = Object.values(count) //<--Data of each id Pizza Selected
        const newTotalPay = valuePizza.reduce((totalSum, valuePizza)=> totalSum + valuePizza.total,0)
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


