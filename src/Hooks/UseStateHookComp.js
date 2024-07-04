import { Button } from '@mui/material';
import React, { useState } from 'react';


const UseStateHookComp = () => {
    const[count,setCount]=useState(0);
    const[name,setName]=useState("suresh");

    const counterInc = () =>{
        setCount(count+1);
    }

    return (
        <div>
            <h2>This is useState Component</h2>
            <h2>Count value is : {count}</h2>
            <h2>My name is : {name}</h2>
            <Button variant='contained' onClick={()=>counterInc()}>Count ++</Button>&nbsp;
            <Button variant='contained' onClick={()=>setName("Sureshmanikandan")}>Name Change</Button>
        </div>
    )
}

export default UseStateHookComp
