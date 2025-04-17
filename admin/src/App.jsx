import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './Components/Login'
import { ToastContainer} from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === "" ?
        <Login setToken={setToken}/> :
        <>
          <Navbar setToken={setToken}/>
          <hr className='border-none h-[1px] bg-gray-300 mt-1' />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token}/>} />
                <Route path='/list' element={<List token={token}/>} />
                <Route path='/orders' element={<Orders token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default App