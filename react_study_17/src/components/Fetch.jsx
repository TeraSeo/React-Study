import React from "react";
import useFetch from "../hooks/useFetch";

const baseUrl = "https://jsonplaceholder.typicode.com";

function Fetch(props) {
    const { data, fetchData } = useFetch(baseUrl, "users");

    return (
        <div>
            <h1>useFetch</h1>
            <button onClick={() => fetchData("users")}>Users</button>
            <button onClick={() => fetchData("posts")}>Posts</button>
            <button onClick={() => fetchData("todos")}>Todos</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Fetch;