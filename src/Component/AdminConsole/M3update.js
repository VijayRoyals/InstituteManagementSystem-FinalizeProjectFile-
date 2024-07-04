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
        axios.put(`http://localhost:8888/course/${id}`, productData).then(() => {
            window.alert("Record Updated Successfully");
            nav('../M3')
        }).catch((error) => { })

    }
    useEffect(() => {
        axios.get(`http://localhost:8888/course/${id}`).then((res) => {
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

export default ProductUpdateComp
