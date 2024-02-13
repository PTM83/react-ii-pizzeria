import { useState } from 'react'

export const getApi = async (api) => {

   try{
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error('Error al cargar la data:', error)
        return [];
    }
}