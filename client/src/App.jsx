import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'


const App = () => {
  return (
    <div>
      <div className=''>
      <Outlet />

      </div>
      <Footer/>
    </div>
  )
}

export default App