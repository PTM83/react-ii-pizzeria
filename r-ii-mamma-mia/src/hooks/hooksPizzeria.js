import { useState, useEffect } from 'react'
//Api Function
import { getApi } from '../services/getApi.js'

export const hooksPizza = () => {
    const url = '/pizzas.json'
    const [infoPizzas, setInfoPizzas] = useState([])

    useEffect( ()=>{
        //Build a function to get the Data from API
        const fetchData = async () => {
            const data = await getApi(url)
            setInfoPizzas(data)
        };
        //Run fetchData function
        fetchData();

    },[])

    return { infoPizzas }
}