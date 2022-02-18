import React,{useEffect} from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


function ProductsList(props) {
    const { productList, setproductList} = props;
    const mynav = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
	console.log(res.data);
        setproductList(res.data);
	})
        .catch((err)=>{
        console.log(err);
    })
    }, [])

    const deleteFilter = (idFromBelow) => {
        console.log(idFromBelow)
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                const newList = productList.filter((product, index) => product._id !== idFromBelow)
                setproductList(newList);
                mynav('/')
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        <div className='mt-4'>
            <h1>All Products:</h1>
            {console.log(productList,"This is product list")}
            {productList.map((product,index) => (
                <div key={index} className=' flex justify-center space-between'>
                <Link className='underline' to ={`/products/${product._id}`}>
                    <p className='flex items-center w-36 justify-between'>{product.title}</p>
                </Link>
                <div>
                    <button onClick={ ()=>{mynav(`/products/edit/${product._id}`)}} className=' mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '>Edit</button> 
                    <button onClick={() => deleteFilter(`${product._id}`)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-3'>Delete</button>
                </div>
                </div>
            ))}
        </div>
    )
}
export default ProductsList;
