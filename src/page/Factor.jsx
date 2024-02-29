import { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import useQuery from "../hook/useQuery";
import { getDetails} from "../service/productservice";
import Button from './../components/common/Button';




const Factor = () => {
    const {basket}=useContext(BasketContext);
    const {data:factor=[]}=useQuery(()=>getDetails(basket));
    
    return (  
        
           <div>
            {factor?.map((item)=>(
                <div className="container">
                    <div className="w-50 h-50">
                <div className="bg-slate-600 ">
                    <div className="flex flex-col border my-1 drop-shadow-lg justify-between border-slate-800 ">
                        <div className="p-4">
                            <img src={item.image} className="mx-auto size-40"/>
                            <p className="text-center my-3 text-slate-50 font-bold">{item.title}</p>

                        </div>
                        <div className="flex">
                        <div className="flex mx-4">
   <Button/>
                    </div>
                        <div className="flex mb-4 items-center justify-end ml-11">
    <p className=" text-slate-600 p-3 px-8 rounded-md m-4 bg-orange-300 font-bold">{`${item.price.toLocaleString(
        undefined,
        {minimumFractionDigits:0}
    )} $`}</p>
    </div>
   
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    </div>
                    
                    
                
            ))}
            <div className="flex justify-end mx-28">
            <button className="bg-orange-300 p-2 px-5 text-slate-800 m-2 rounded-sm border-slate-800 text-bold hover:bg-slate-600 
            hover:text-orange-300 hover:border-orange-300">Checkout</button>
        </div>

           </div>
    );
};
 
export default Factor;