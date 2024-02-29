import { useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";

const Button = () => {
    let [count,setCount]=useState(0);
    const handleNegative=()=>{
        setCount(count-1);
    }
    const handleAdd=()=>{
        setCount(count +1);
    };
    return ( <div className="flex mx-5">
        <button onClick={handleNegative} ><TiMinusOutline className="size-7 text-slate-50 hover:text-orange-300"/></button>
<p className="p-2 text-slate-50 text-bold text-lg">{count}</p>
            <button onClick={handleAdd} ><TiPlusOutline className="size-7 text-slate-50 hover:text-orange-300"/></button>
    </div> );
}
 
export default Button;