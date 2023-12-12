import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../../redux/slices/productSlice';
import SingleProduct from '../singleProduct/SingleProduct';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const products=useSelector(state=>state.productReducer.products);
    useEffect(()=>{
        fetchData();
    },[])
    async function fetchData()
    {
        try{
            const response=await fetch('https://api.escuelajs.co/api/v1/products');
            const data =await response.json();
            dispatch(loadProducts(data));
        }
        catch(error){
            alert(error);
        }
      
    }
  return (
    <div  className='product-list'>
        {
            products.map((item)=>
            {
                return <div> <SingleProduct product={item}/> </div>
            })
        }
    </div>
  )
}

export default ProductList