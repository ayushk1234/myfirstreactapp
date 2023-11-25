import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HostVans = () => {

  const [hostVans,setHostVans]=useState([])
  useEffect(()=>{

    fetch("https://demo4664564.mockable.io/api/vans")
    .then(data=>(data.json()))
    .then((data)=> setHostVans(data.van))

  },[])

  const HostElement = ()=>{
    return (
      hostVans.map((hostVan)=>{
        console.log(hostVan)
        return(
          <div key={hostVan.id}>
            <Link to={`/host/vans/${hostVan.id}`}>
            {hostVan.id}

            </Link>
           
            </div>
        )

      })
    )
  }

  return (

    hostVans?
    <div>
      <HostElement/>
    </div>:
    <div>Loading...</div>
  )
}

export default HostVans