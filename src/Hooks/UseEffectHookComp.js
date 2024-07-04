import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {

    const [count,setCount] = useState(0);
    const [salary,setSalary] = useState(80000);

    // useEffect(()=>{
    //     setCount(count+1)
    // },[])
    useEffect(()=>{
        setCount(count+1)
    },[salary])



    return (
        <div>
            <h2>This is UseEffectHook Component</h2>
            <h2>counter value is : {count}</h2>
            <h2>salary value is : {salary}</h2>
            <Button onClick={()=>setSalary(salary+10000)} variant='outlined'>Increase Salary</Button>
        </div>
    )
}

export default UseEffectHookComp
