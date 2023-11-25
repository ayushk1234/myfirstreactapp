import React from 'react'
import { useOutletContext } from 'react-router-dom';
const HostVanInfo = () => {

    const {hostVanDetail}= useOutletContext();
    // const increment = () => setCount((c) => c + 1);
    return (
        <h4>{hostVanDetail.name}</h4>
    )
 
}

export default HostVanInfo