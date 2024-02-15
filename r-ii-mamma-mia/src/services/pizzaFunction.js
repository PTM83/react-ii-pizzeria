import { useState, useEffect } from 'react'

export const useProductCount = () => {
    const [count, setCount] = useState({})
    const [ totalPay, setTotalPay ] = useState(0)

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
        const infoPizza = Object.values(count) //<--Data of each id Pizza Selected
        const newTotalPay = infoPizza.reduce((totalSum, valuePizza)=> totalSum + valuePizza.total,0)
        setTotalPay(newTotalPay)
    },[count]);

    return { count, toggleButton, totalPay };
}

