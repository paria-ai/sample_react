import MainRouter from './components/MainRouter';
import BasketProvider from './context/BasketProvider';
import QueryProvider from './context/QueryProvider';
import { Toaster } from 'react-hot-toast';


function App() {

    return ( <
        QueryProvider >
        <
        BasketProvider >
        <
        Toaster / >
        <
        MainRouter / >

        <
        /BasketProvider> < /
        QueryProvider >

    );


};

export default App;