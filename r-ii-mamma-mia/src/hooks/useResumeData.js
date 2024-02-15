import { useContext, useMemo } from 'react'
import { ContextPizzeria } from '../context/ContextPizzeria.jsx'

//Function that let you take the total amount payable by the user
export const useResumeData = () =>{

    const { infoPizzas, count } = useContext(ContextPizzeria);

    const resumeData = useMemo(()=>{
        const idPizzas = Object.keys(count);
        const extractId = infoPizzas.filter(obj => idPizzas.includes(obj.id))
        return extractId;
    },[count])

    return resumeData
}