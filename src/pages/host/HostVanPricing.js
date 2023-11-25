import React from 'react'
import { useOutletContext } from 'react-router-dom';
const HostVanPricing = () => {
    const {hostVanDetail}= useOutletContext();
    // const increment = () => setCount((c) => c + 1);
    return (
        <h4>{hostVanDetail.price}</h4>
    )
}

export default HostVanPricing