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
        axios.post(`http://localhost:8888/trainer`,productData).then(()=>{
            window.alert("Record Added Successfully");
            nav('../M4')
        }).catch((error)=>{})

    }
    return (
        <div> &nbsp;
            <h2>Please Update all the field correctly</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}> &nbsp;

 
                        <label className='form-label'>Trainer ID :</label> 
                        <input type='text' name='TrainerID' onChange={inputChange} value={productData.TrainerID} className='form-control'></input> &nbsp;
                        <label className='form-label'>Trainer Name :</label> 
                        <input type='text' name='Name' onChange={inputChange} value={productData.Name} className='form-control'></input> &nbsp;
                        <label className='form-label'>Trainer Contact :</label> 
                        <input type='tel' name='Contact' onChange={inputChange} value={productData.Contact} className='form-control'></input> &nbsp;
                        <label className='form-label'>Trainer Designation :</label> 
                        <input type='text' name='Designation'  onChange={inputChange} value={productData.Designation} className='form-control'></input> &nbsp;
                        <label className='form-label'>Trainer Experience :</label> 
                        <input type='text' name='Experience'  onChange={inputChange} value={productData.Experience} className='form-control'></input> &nbsp;
                        


                        <button type='submit' className='btn btn-danger'>submit</button> &nbsp;
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProductAddComp

