import { useEffect, useState } from "react";

function useFetch(baseUrl, type) {
    const [data, setData] = useState(null);

    const fetchData = (type) => {
        fetch(baseUrl + "/" + type)
            .then((res) => res.json())
            .then((res) => setData(res));
    };

    useEffect(() => {
        fetchData(type);
    }, []);

    return {
        data, 
        fetchData
    }
}

export default useFetch;