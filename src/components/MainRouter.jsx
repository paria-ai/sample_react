import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail";
import MainLayout from "./layout/MainLayout";
import Factor from './../page/Factor';


const MainRouter = () => {
    return ( 
        <>
        <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home 
        />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/product/:id" element={<ProductDetail/>}/>
                <Route path="/factor" element={<Factor/> }/>
            </Route>
            
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default MainRouter;