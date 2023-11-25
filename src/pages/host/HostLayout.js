import React from 'react'
import { Link,Outlet,NavLink } from 'react-router-dom'

const HostLayout = () => {
    const style = {
        color:"red"
    }
  return (
    <div>
        <nav>
        <NavLink style={({isActive})=>isActive?style:null}  to ="/host" end>Dashboard</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="income">Income</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="reviews">Reviews</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="vans">Vans</NavLink>

        </nav>
        <Outlet/>
    </div>
  )
}

export default HostLayout