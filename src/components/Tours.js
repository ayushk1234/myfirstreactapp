import Title from "./Title";
import {tours} from "../data";
import Tour from "./Tour";

const Tours = ()=>{
    return (
        <div>
            {tours.map((tour)=>{
                return <Tour {...tour} key={tour.id}/>
            })}
        </div>

    )
}

export default Tours;