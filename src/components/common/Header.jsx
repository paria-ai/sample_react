import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BasketContext } from "../../context/BasketProvider";
import { TbBrandShopee } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { GrCreditCard } from "react-icons/gr";

const Header = () => {
    const {basket}=useContext(BasketContext);
    return ( <header className="w-full container">
        <div className="flex justify-between p-4 drop-shadow-lg">
            <h1 className="font-bold text-2xl text-orange-300 flex"><GrCreditCard className="flex m-1" />shope</h1>
            <div className="flex gap-4">
                <NavLink to={"/login"} className={({isActive})=>
                isActive?"text-orange-300 flex":"text-slate-50 flex"}><RiLoginCircleFill className="flex m-1" />Login</NavLink>
                <NavLink to={"/"} className={({isActive})=>
                isActive?"text-orange-300 flex":"text-slate-50 flex"}><FaHome className="flex m-1"/>Home</NavLink>
                <div className="flex gap-1">
                    <NavLink to={"/factor"} className={({isActive})=>
                isActive?"text-orange-300 flex":"text-slate-50 flex"}><TbBrandShopee className="flex m-1"/>Factor</NavLink>
                <p className="text-slate-50">{basket?.length ?? 0}</p>
                </div>
            </div>
        </div>
    </header> );
}
 
export default Header;