import React,{useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductsList(props) {
    const { productList, setproductList} = props;

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

    return(
        <div className='mt-4'>
            <h1>All Products:</h1>
            {console.log(productList,"This is product list")}
            {productList.map((product,index) => (
                <div key={index}>
                <Link className='underline' to ={`/products/${product._id}`}>
                    <p >{product.title}</p>
                </Link>
                </div>
            ))}
        </div>
    )
}
export default ProductsList;
