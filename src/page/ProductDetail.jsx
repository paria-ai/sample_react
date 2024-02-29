import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../hook/useQuery";
import { getDetail } from "../service/productservice";
import { TbBrandShopee } from "react-icons/tb";

const ProductDetail = () => {
    const addToBasket=(e)=>{
        e.stopPropagation();
        
    };
    const {id}=useParams();
    const {data:product,error,loading}=useQuery(()=>getDetail(id));

    if (loading)return <p>Loading...</p>;
    if(error)return <p>{error.response.statusText}</p>;
    return  (
        <div className=" drop-shadow-lg justify-between ">
        <div key={id} className="p-4  m-10">
        <img src={product?.image} className="mx-auto size-80 items-center rounded-md"/></div>
    
        <div className=" ml-5 ">
        <p className="font-bold   text-slate-50 m-4 p-3 text-center text-xl">{product?.title}</p>
        <p className="font-bold   text-slate-50 p-3 m-2 mb-5">{product?.description}</p>
        <div className="flex mb-4 items-center justify-center">
    <p className="text-end text-xl text-slate-600 p-2 rounded-full mx-10 bg-orange-300 font-bold">{`${product?.price.toLocaleString(
        undefined,
        {minimumFractionDigits:0}
    )} $`}</p>
    <div className="p-2 border font-bold bg-slate-600 mx-10 w-60 text-orange-300 hover:bg-orange-300 hover:text-slate-800 hover:rounded-md text-center border-gray-900">
        <button onClick={addToBasket}> <TbBrandShopee className="size-8" /></button>
    </div>
    </div>
        </div>
        
    
    </div>)
     
};
 
export default ProductDetail;