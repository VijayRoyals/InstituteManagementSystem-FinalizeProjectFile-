// import React from 'react'

// const M3 = () => {
//   return (
//     <div>
//     <h1>Role Management</h1>
//     <h3>by</h3>
//     <h2>Tamarai Selvan</h2>
//     </div>
//   )
// }

// export default M3



import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/EditNoteOutlined';


const ProductDashboardComp = () => {
    const [productData, setProductData] = useState([]);
     useEffect ( () =>{
        fetchData();
    },[])
    const fetchData =() => {
        axios.get(`http://localhost:8888/course`).then((response) => {
            setProductData(response.data)
        }).
            catch((error) => { })
    }
    const DeleteProduct = (id) =>{
        if(window.confirm(`Are you sure to delete Id:${id}`)){
            axios.delete(`http://localhost:8888/course/${id}`).then(()=>{
                window.alert("Record Deleted");
                fetchData();
            }).catch((error)=>{})
        }
       
    }
   
    return (
        <div>

            <br/>
            
            <div class="text-center">
            <h2>This is Course Database</h2>
            </div>
            

            <hr className="text-secondary mt-2" />
            <div class="d-flex justify-content-center">
            <Link to="../M3add" className='btn btn-outline-success' ><AddIcon /> &nbsp;ADD</Link>
            </div>
            
            {/* <Link to="/Logout"  className='btn btn-primary' style={{float:"right"}}>&nbsp;signout</Link><br /> */}
            
            <table className='table table-hover table-striped '>
                <thead className='table-dark'><tr>
                    <th>S.no</th>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Course Trainer</th>
                    <th>Course Duration</th>
                    <th>Action</th>
                </tr>

                </thead>
                <tbody>{
                 productData.map((val, index) => {
                        return <tr>
                            <td className='text-center'>{index+1}</td>
                            <td className='text-center'>{val.CourseID}</td>
                            <td className='text-center'>{val.CourseName}</td>
                            <td className='text-center'>{val.CourseTrainer}</td>
                            <td className='text-center'>{val.CourseDuration}</td>
                            <td className='text-center'>
                            <Link to={`../M3update/${val.id}`} className='btn btn-outline-success btn-sm'><EditNoteOutlinedIcon /> </Link> {"| "}
                            {/* <Link to={`../M3update`} className='btn btn-outline-success btn-sm'><EditNoteOutlinedIcon /> </Link> {"| "} */}
                                <button type='button' onClick={()=>{DeleteProduct(val.id)}} className='btn btn-outline-danger btn-sm'>
                                    <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                                </button>
                                
                            </td>
                        </tr>
                })}

                </tbody>

            </table>
        </div>
    )
}

export default ProductDashboardComp
