import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'

function UpdateOneProduct() {
    const mynav = useNavigate();
    const { id } = useParams();
    console.log(id)
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")

    function submitHandler (e) {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/products/${id}`,{
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res)
                console.log(res.data)
                mynav("/")
            })
            .catch((err) => {
                console.log(err)
            })
        
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);

            })
            .catch((err) =>  {
                console.log("something went wrong",err)
            })
            
    },[])
    return (
        <div className =" flex justify-center ">
            <div>
            <h2 className="mt-5">Product Manager Update</h2>
            <form onSubmit={submitHandler} className="w-96 pt-5">
                <div className="inputElement bg-yellow-100  flex justify-between m-auto py-4 px-2 my-4">
                    <label> 
                        Title:
                    </label>
                    <input value={title} type="text" onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div className="inputElement bg-yellow-100  flex justify-between m-auto py-4 px-2 my-4">
                    <label> 
                        Price:
                    </label>
                    <input value={price} type="number" onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <div className="inputElement bg-yellow-100  flex justify-between m-auto py-4 px-2 pb-5 my-4">
                    <label> 
                        Description:
                    </label>
                    <input value={description} type="text" onChange={(e) => {setDescription(e.target.value)}} />
                </div>
                <button className="w-48 border-2 bg-gray-200 mt-4">Update</button>
            </form>
            </div>
        </div>
    )
}

export default UpdateOneProduct;