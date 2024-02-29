import axios from "axios";
import { useState, useEffect } from "react";
const useProduct = () => {
    const [products, setProducts] = useState([]);
    const handleGetData = async() => {
        try {
            const { data } = await axios.get("/products");
            setProducts(data);
        } catch (ex) {}
    };
    useEffect(() => {
        handleGetData();
    }, []);
    return { products };
};

export default useProduct;