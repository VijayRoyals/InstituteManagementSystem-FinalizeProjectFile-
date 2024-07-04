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
        axios.put(`http://localhost:8888/products/${id}`, productData).then(() => {
            window.alert("Record Updated Successfully");
            nav('../M2')
        }).catch((error) => { })

    }
    useEffect(() => {
        axios.get(`http://localhost:8888/products/${id}`).then((res) => {
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
 
                        <label className='form-label'>Student Roll No :</label> 
                        <input type='text' name='RollNo' onChange={inputChange} value={productData.RollNo} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Name :</label> 
                        <input type='text' name='Name' onChange={inputChange} value={productData.Name} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Department :</label> 
                        <input type='text' name='Dept' onChange={inputChange} value={productData.Dept} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Contact No :</label> 
                        <input type='tel' pattern="[0-9]{10}" name='Contact'  onChange={inputChange} value={productData.Contact} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Email :</label> 
                        <input type='text' name='Email' onChange={inputChange} value={productData.Email} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Gender :</label> 
                        <input type='text' name='Gender' onChange={inputChange} value={productData.Gender} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student DOB :</label> 
                        <input type='date' name='DOB' onChange={inputChange} value={productData.Dob} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Address :</label> 
                        <input type='text' name='Address' onChange={inputChange} value={productData.Address} className='form-control'></input> &nbsp;
                        <label className='form-label'>Student Password :</label> 
                        <input type='password' name='Password' onChange={inputChange} value={productData.Password} className='form-control'></input> &nbsp;



                        <button type='submit' className='btn btn-danger'>submit</button> &nbsp;
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ProductUpdateComp
