import { useContext, useEffect, useState } from "react";
import { QueryContext } from './../context/QueryProvider';

const useQuery = (func, dep = []) => {
    const { setError, setLoading, error, loading } = useContext(QueryContext);
    const [data, setData] = useState();
    const handleGetData = async() => {
        setLoading(true);
        try {
            const data = await func();
            setData(data);

        } catch (err) {
            setError(err.response);
        }
        setLoading(false);
    };
    useEffect(() => {
        handleGetData();
    }, dep);

    return { error, loading, data };
};

export default useQuery;