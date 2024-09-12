import React from 'react'
import ResponsiveAppBar from './component/Navbar'
import {Outlet} from "react-router-dom"

const App = () => {
  return (
    <div>
      <ResponsiveAppBar/>
      <Outlet />
      
    </div>
  )
}
export default App