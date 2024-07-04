import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ReactHooksComp = () => {
    return (
        <div>
            {/* <Link to="ReactHooks/UseState" className='btn btn-primary' >UseState</Link> &nbsp; */}
            <h2>This is ReactHook Component</h2>
            <div className='card border-primary'>
                <div className='card-header border-primary '>
                <Link to="UseState" className='btn btn-primary btn-sm' >UseState</Link> &nbsp;
                <Link to="UseEffect" className='btn btn-primary btn-sm' >UseEffect</Link> &nbsp;
                </div>
                <div className='card-body border-primary '><center><Outlet></Outlet></center>
               
                
                </div>
                {/* <div className='card-footer border-primary '><center><Outlet></Outlet></center></div> */}

            </div>

            
           
        </div>
    )
}

export default ReactHooksComp
