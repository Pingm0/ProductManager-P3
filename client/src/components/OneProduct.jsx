import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const OneProduct = (props) => {
    const mynav = useNavigate()
    const { id } = useParams();
    console.log(id,"MyID")
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                
                mynav("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div className="oneProduct-component">
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button onClick={() =>deleteHandler() } className=' mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '>Delete</button>
        </div>
    );
};

export default OneProduct;