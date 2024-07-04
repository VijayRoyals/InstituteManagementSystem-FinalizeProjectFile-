import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ProductAddComp = () => {
    const nav = useNavigate();
    const[productData,setProductData] = useState({
        pname:"",
        price:"",
        company:""
    });

    const inputChange = (events) =>{
        
        const{type,name,value} = events.target;
    setProductData({...productData,[name]:value})
    }
    const addProduct = (event) =>{
        event.preventDefault();
        axios.post(`http://localhost:8888/course`,productData).then(()=>{
            window.alert("Record Added Successfully");
            nav('../M3')
        }).catch((error)=>{})

    }
    return (
        <div> &nbsp;
            <h2>Please Update all the field correctly</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}> &nbsp;

                
 
                        <label className='form-label'>Course ID :</label> 
                        <input type='text' name='CourseID' onChange={inputChange} value={productData.CourseID} className='form-control'></input> &nbsp;
                        <label className='form-label'>Course Name :</label> 
                        <input type='text' name='CourseName' onChange={inputChange} value={productData.CourseName} className='form-control'></input> &nbsp;
                        <label className='form-label'>Course Trainer :</label> 
                        <input type='text' name='CourseTrainer' onChange={inputChange} value={productData.CourseTrainer} className='form-control'></input> &nbsp;
                        <label className='form-label'>Course Duration :</label> 
                        <input type='text' name='CourseDuration'  onChange={inputChange} value={productData.CourseDuration} className='form-control'></input> &nbsp;
                        


                        <button type='submit' className='btn btn-danger'>submit</button> &nbsp;
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProductAddComp

