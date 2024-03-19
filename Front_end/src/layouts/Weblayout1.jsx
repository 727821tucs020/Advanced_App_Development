import React from 'react'
import LoginNavbar from '../components/Public/loginnavbar'
import {Outlet} from 'react-router-dom'
function WebLayout1() {
  return (
   <>
   <div>
     <LoginNavbar/>
     <div>
        <Outlet/>
     </div>
     </div>
   </>
  )
}

export default WebLayout1
