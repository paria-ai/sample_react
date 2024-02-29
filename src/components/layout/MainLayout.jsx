import { Outlet } from "react-router-dom";
import Header from './../common/Header';
import Footer from './../common/Footer';
import Loading from './../common/Loading';

const MainLayout = () => {

    return ( 
        <>
        <Loading />
        <Header />
        <Outlet/>
        <Footer/>
        </>
     );
}
 
export default MainLayout;