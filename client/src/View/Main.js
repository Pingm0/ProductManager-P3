import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';


const Main = (props) => {
    const [productList,setproductList] = useState([])
    
    return (
        <div>
            <ProductForm productList = {productList} setproductList = {setproductList} />
            <ProductsList productList = {productList} setproductList = {setproductList}  />
        </div>
    )
}
export default Main;