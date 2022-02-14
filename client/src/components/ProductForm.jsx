import React,{useState} from "react";
import axios from 'axios';


function ProductForm() {

    // States

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
    }

    return (
        <div className =" flex justify-center ">
            <div>
            <h2 className="mt-5">Product Manager</h2>
            <form onSubmit={submitHandler} className="w-96 pt-5">
                <div className="inputElement bg-yellow-100  flex justify-between m-auto py-4 px-2 my-4">
                    <label> 
                        Title:
                    </label>
                    <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div className="inputElement bg-yellow-100  flex justify-between m-auto py-4 px-2 my-4">
                    <label> 
                        Price:
                    </label>
                    <input type="text" onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <div className="inputElement bg-yellow-100  flex justify-between m-auto py-4 px-2 pb-5 my-4">
                    <label> 
                        Description:
                    </label>
                    <input type="text" onChange={(e) => {setDescription(e.target.value)}} />
                </div>
                <button className="w-48 border-2 bg-gray-200 mt-4">Create</button>
            </form>
            </div>
        </div>
    )
}
export default ProductForm;
