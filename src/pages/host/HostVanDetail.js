import React, { useEffect, useState } from 'react'
import { useParams ,NavLink,Outlet} from 'react-router-dom'
import HostLayout from './HostLayout'
import HostVanDetailLayout from './HostVanDetailLayout'

const HostVanDetail = () => {
  const params = useParams()
  const style = {
    color:"red"
}
  const [hostVanDetail,setHostVanDetail]=useState(null)
  useEffect(()=>{
    fetch(`https://demo4664564.mockable.io/api/vans/${params.id}`)
    .then(data=>(data.json()))
    .then((data)=> setHostVanDetail(data.van))

  },[params.id])


  if(!hostVanDetail){
    return <h1>Loading..</h1>
  }

    return (
    
    <div>
    <NavLink to='..' relative='path'>Back to </NavLink>
        <div>{hostVanDetail.description}</div> 
        <img src={hostVanDetail.imageUrl}/>
    
   
    
    <nav>
        <NavLink style={({isActive})=>isActive?style:null}  to ="/host/vans/2" end>Detail</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="pricing">Pricing</NavLink>
        <NavLink style={({isActive})=>isActive?style:null} to ="photos">Photos</NavLink>
        
        </nav>
        <Outlet context={{hostVanDetail}}/>
        {/* <HostVanDetailLayout/> */}

    </div>

    

    
  )
}

export default HostVanDetail