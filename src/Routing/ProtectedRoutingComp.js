import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const ProtectedRoutingComp = ({Component}) => {
    const nav = useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/Login");

        }
    },[])
    return (
        <div>
            <Component></Component>
        </div>
    )
}

export default ProtectedRoutingComp
