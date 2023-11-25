import { useEffect, useState } from "react";
import React from "react";
import { Link,useSearchParams } from "react-router-dom";
const Vans =()=>{
    
    const [vans, setVans] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    console.log(searchParams.get("type"))
    useEffect(() => {
        fetch("https://demo4664564.mockable.io/api/vans")
            // .then(res => res.di())
            .then(data => (data.json()))
            .then(data=>setVans(data.van))
            
        // console.log(vans)    
    }, [])

    const  typeFiltered = typeFilter?
    vans.filter((van) => typeFilter===van.type):
    vans


    const Elements = ()=>{
        return (
            
                typeFiltered
                // filter((van) => typeFilter===van.type)
                .map((van)=>{
                    // console.log(van)
                    // type=[...type,van.type]
                    // if(typeFilter===van.type){
                    return (<div key={van.id}>
                        <Link to={van.id} state={{
                            search:`?${searchParams.toString()}`,
                            type:typeFilter
                            }}>
                        
                        <h3>{van.name}</h3>
                        <img src={van.imageUrl} style={{width:300,height:300}}/>
                        <h4>{van.price}</h4>
                        {/* </Link> */}
                        </Link>
                    </div>)
                    // }
                })
                
        )

    }


    function handleFilterChange(key,value){
        // const sp= new URLSearchParams(searchParams)
        setSearchParams(prevParams =>{
            if(value===null){
                prevParams.delete(key)
            }else{
                prevParams.set(key,value)
            }
            return prevParams
        })

    }
    const TypeFilter = () =>{
        return (
            vans.map((van)=>{
                return(
                    <div key={van.id}>
                    <button onClick={()=>{setSearchParams({type:van.type})}}>{van.type}</button>
                    {/* <button className={`van-type simple ${typeFilter===van.type?"selected":""}`} onClick={()=>{handleFilterChange(van.key,van.type)}}>{van.type}</button> */}
                    {/* <li key={van.id}><Link to ={`?type=${van.type}`}>{van.type}</Link></li> */}
                    </div>
                )

            })
        )
    }

    // console.log(type)

    return (
        vans?
        <div>
            {/* <button onClick={()=>handleClick}>Rugged</button> */}
            <TypeFilter/>
            {typeFilter?

                (<li ><Link to ='.'>Clear</Link></li>):
                null
            }
            
            
            
            <Elements/>
        </div>:
        <div><h1>Loading...</h1></div>

    )
}

export default Vans;