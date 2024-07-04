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
        axios.get(`http://localhost:8888/trainer`).then((response) => {
            setProductData(response.data)
        }).
            catch((error) => { })
    }
    const DeleteProduct = (id) =>{
        if(window.confirm(`Are you sure to delete Id:${id}`)){
            axios.delete(`http://localhost:8888/trainer/${id}`).then(()=>{
                window.alert("Record Deleted");
                fetchData();
            }).catch((error)=>{})
        }
       
    }
   
    return (
        <div>

            <br/>
            
            <div class="text-center">
            <h2>This is Trainer Database</h2>
            </div>
            

            <hr className="text-secondary mt-2" />
            <div class="d-flex justify-content-center">
            <Link to="../M4add" className='btn btn-outline-success' ><AddIcon /> &nbsp;ADD</Link>
            </div>
            
            {/* <Link to="/Logout"  className='btn btn-primary' style={{float:"right"}}>&nbsp;signout</Link><br /> */}
            
            <table className='table table-hover table-striped '>
                <thead className='table-dark'><tr>
                    <th>S.no</th>
                    <th>Trainer ID</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th>Action</th>
                </tr>

                </thead>
                <tbody>{
                 productData.map((val, index) => {
                        return <tr>
                            <td className='text-center'>{index+1}</td>
                            <td className='text-center'>{val.TrainerID}</td>
                            <td className='text-center'>{val.Name}</td>
                            <td className='text-center'>{val.Contact}</td>
                            <td className='text-center'>{val.Designation}</td>
                            <td className='text-center'>{val.Experience}</td>

                            <td className='text-center'>
                            <Link to={`../M4update/${val.id}`} className='btn btn-outline-success btn-sm' ><EditNoteOutlinedIcon /> </Link>  {"| "}
                            {/* <Link to={`../M4update`} className='btn btn-outline-success btn-sm' ><EditNoteOutlinedIcon /> </Link>  {"| "} */}
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
