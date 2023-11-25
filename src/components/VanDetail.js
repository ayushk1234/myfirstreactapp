import { useParams, useSearchParams,useLocation ,Link} from "react-router-dom"
import { useEffect,useState } from "react"


const VanDetail = ()=>{

    const params = useParams()
    const location = useLocation();
    const state=location.state?.search||""
    const type = location.state?.type||""
    console.log(location.state)
    
    const [van, setVan] = useState(null)
    console.log(params.id)
    useEffect(() => {
        fetch(`http://demo4664564.mockable.io/api/vans/${params.id}`)
            .then(data => (data.json()))
            .then(data=>setVan(data.van))
            
        // console.log(van)    
    }, [params.id])


    // function handleBack (){
    //     console.log(state)
    //     if (state===null){
    //         console.log(" in if ")
    //         return '..'
    //     }

    // }
    // const type = state==""?"":state.slice(6,)
    const backToType=type==""?'back to all vans':`back to all ${type} vans`
    function backString(){
        // const backToType =''
        backToType = state==""?'back to all vans':`back to all ${state} vans`
        // return 

    }
    return (
        
        van?
        <div>
            {/* <Link to = ".." relative="path">back to </Link> */}
            <Link to = {`..${state}`} relative="path" >{backToType} </Link>
            <div>{van.id}  
          {van.description}</div>
          
          <div><button >Rent the van</button></div>
          
        </div>:
        <div>
        <h1>Loading</h1>
        </div>
    )
}

export default VanDetail;