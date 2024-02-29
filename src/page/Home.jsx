
import Product from "../components/Home/product";
import { BasketContext } from "../context/BasketProvider";
import useEffectAfterRender from "../hook/useEffectAfterRender";
import useQuery from "../hook/useQuery";
import { getAllProduct } from "../service/productservice";
import { useContext, useState } from "react";


const Home = () => {
  const {basket,setBasket}=useContext(BasketContext);
    const{data}=useQuery(()=>getAllProduct());
    useEffectAfterRender(()=>{
      console.log("page_change")
    },[]);
    const handleAddToBasket=(id)=>{
      setBasket([...basket,id]);
  };
    
    return ( 
      <>
    <div className="container m-3 ">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ">
        {data?.map((item)=>(
           <Product {...item} 
           handleAddToBasket={handleAddToBasket} />
        ))}
       </div>
       
    </div>
    </> );
}
 
export default Home;