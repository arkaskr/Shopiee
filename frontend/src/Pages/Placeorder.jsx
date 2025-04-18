import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../Assets/assets'
import { ShopContext } from '../Context/ShopContext'

const Placeorder = () => {

  const [method,setMethod]=useState('cod');
  const {navigate}=useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t:'>

      {/* Left Side */}
      <div className='flex flex-col w-full gap-4 sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
          <input type="text" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' />
        </div>

        <input type="email" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Email address' />
        <input type="text" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Address' />

        <div className='flex gap-3'>
          <input type="text" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' />
          <input type="text" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' />
        </div>

        <div className='flex gap-3'>
          <input type="number" className='w-[49%] border border-r-gray-300 rounded py-1.5 px-3.5' placeholder='Zip-Code' />
        </div>

        <input type="number" className='border border-r-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-[23rem]'>
            <CartTotal/>
        </div>

        <div className='text-[1.2rem] pl-5 mt-12'>
          <Title text1={'PAYMENT '} text2={'METHOD'}/>

          {/* Payment Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400':''} `}></p>
                <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div> 
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-400':''} `}></p>
                <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer rounded-md'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-400':''} `}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-center mt-8 '>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white text-sm px-16 py-3 rounded-md'>PLACE ORDER</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Placeorder