import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const HostVanDetailLayout = () => {

    const style = {
        color:"red"
    }
  return (
    <div>
        <nav>
        <NavLink style={({isActive})=>isActive?style:null}  to ="." end>Detail</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="pricing">Pricing</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="photos">Photos</NavLink>
        {/* <NavLink style={({isActive})=>isActive?style:null} to ="/host/vans">Vans</NavLink> */}
        </nav>
        <Outlet/>
    </div>
  )
}

export default HostVanDetailLayout