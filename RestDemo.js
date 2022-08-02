import React, { useEffect, useState } from 'react';

const RestDemo = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const url ="http://jsonplaceholder.typicode.com/todos";
        fetch(url)
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.log(error));
    },[]);
    return (
        <div>
            <table border='1'>
               <tbody>
                <tr><th>userid</th><th>ID</th><th>Title</th></tr>
                {data.map((data1,i)=><tr><td>{data1.userId}</td><td>{data1.id}</td><td>{data1.title}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
};
export default RestDemo;