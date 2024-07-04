import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductUpdateComp = () => {
    const { id } = useParams();
    const nav = useNavigate();
    const [productData, setProductData] = useState({
        id: "",
        pname: "",
        price: "",
        company: ""
    });

    const inputChange = (events) => {

        const { type, name, value } = events.target;
        setProductData({ ...productData, [name]: value })
    }
    const addProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8888/trainer/${id}`, productData).then(() => {
            window.alert("Record Updated Successfully");
            nav('../M4')
        }).catch((error) => { })

    }
    useEffect(() => {
        axios.get(`http://localhost:8888/trainer/${id}`).then((res) => {
            // console.log(res.data);
            setProductData(res.data);
        }).catch((error) => { })
    }, [])
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

export default ProductUpdateComp
