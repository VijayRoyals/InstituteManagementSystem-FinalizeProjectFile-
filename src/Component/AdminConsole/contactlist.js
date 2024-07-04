import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/EditNoteOutlined';

const ProductDashboardComp = () => {
    const [NewcontactData, setNewcontactData] = useState([]);
     useEffect ( () =>{
        fetchData();
    },[])
    const fetchData =() => {
        axios.get(`http://localhost:8888/NewcontactData`).then((response) => {
            setNewcontactData(response.data)
        }).
            catch((error) => { })
    }
    const DeleteProduct = (id) =>{
        if(window.confirm(`Are you sure to delete Id:${id}`)){
            axios.delete(`http://localhost:8888/NewcontactData/${id}`).then(()=>{
                window.alert("Record Deleted");
                fetchData();
            }).catch((error)=>{})
        }
       
    }
    
   
    return (
        <div>

            <br/>
            
            <div class="text-center">
            <h2>This is Contact List</h2>
            </div>
            

            <hr className="text-secondary mt-2" />
            
            
            <table className='table table-hover table-striped '>
                <thead className='table-dark'><tr>
                    <th>S. No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Action</th>
                    
                </tr>

                </thead>
                <tbody>{
                 NewcontactData.map((val, index) => {
                        return <tr>
                            <td >{index+1}</td>
                            <td >{val.firstName}</td>
                            <td >{val.lastName}</td>
                            <td >{val.email}</td>
                            <td >{val.subject}</td>
                            <td >{val.message}</td>

                            <td className='text-center'>
                            
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
