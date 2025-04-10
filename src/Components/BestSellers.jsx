import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem';

const BestSellers = () => {

const{products}=useContext(ShopContext);
const[bestSellers,setBestSellers]=useState([]);

useEffect(()=>{
    const bestProduct=products.filter((item)=>(item.bestseller));
    setBestSellers(bestProduct.slice(0,5))
},[])

  return (
    <div className='mb-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST '} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is a type of placeholder (dummy) text used in the design, publishing, and web development world</p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            bestSellers.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
      </div>
    </div>
  )
}

export default BestSellers