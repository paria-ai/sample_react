
import { Link, useNavigate } from "react-router-dom";
import { TbBrandShopee } from "react-icons/tb";

const Product = ({id,price,title,image,handleAddToBasket}) => {
    const navigate =useNavigate();
    const addToBasket=(e)=>{
        e.stopPropagation();
        handleAddToBasket(id);
    };
    return ( 
       <div onClick={()=>navigate(`/product/${id}`)} className="bg-slate-50 ">
        <div className="flex flex-col border drop-shadow-lg justify-between border-slate-800">
        <div key={id} className="p-4">
        <img src={image} className="mx-auto size-40"/>
    <p className="font-bold mt-4 text-slate-800">{title}</p>
    
    </div>
    <div className="flex mb-4 items-center justify-end">
    <p className="text-end text-slate-600 p-2 rounded-r-full bg-orange-300 font-bold">{`${price.toLocaleString(
        undefined,
        {minimumFractionDigits:0}
    )} $`}</p>
    </div>
    <div className="p-2 border font-bold bg-slate-600 w-full text-orange-300 hover:bg-slate-800 text-center border-gray-900">
        <button onClick={addToBasket}> <TbBrandShopee className="size-8" /></button>
    </div>
    </div>
    </div>
     );
}
 
export default Product;