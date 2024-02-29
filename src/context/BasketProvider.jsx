import { createContext, useEffect, useState } from "react";

export const BasketContext=createContext({
    addToBasket:()=>{},
});
const BasketProvider = ({children}) => {
    const[basket,setBasket]=useState([]);
    useEffect(()=>{},[]);
    const addToBasket=(id)=>{
        setBasket([...basket,id]);
    };
    return (
        <BasketContext.Provider value={{basket,setBasket,addToBasket}}>
            {children}
        </BasketContext.Provider>
      );
}
 
export default BasketProvider;