import { BiLogoTelegram } from "react-icons/bi";
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div className=" bg-slate-600  border-slate-800 py-5 bottom-0  w-full">
            <div className="flex mt-5 ml-5 ">
           <Link> <BiLogoTelegram className="size-8 mx-3 text-orange-300"/></Link>
           <Link> <GrInstagram className="size-8 mx-3 text-orange-300"/></Link>
            <Link><IoLogoWhatsapp className="size-8 mx-3 text-orange-300"/></Link>
       </div> </div>
     );
}
 
export default Footer;