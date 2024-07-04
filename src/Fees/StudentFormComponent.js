import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentFormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    regId: '',
    fullName: '',
    courseId: '',
    courseName: '',
    totalCourseFee: '',
    paymentOption: '',
    installcount: '',
    amountPay: '',
    pendingAmount: '',
    paymentType: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === 'installcount' && formData.paymentOption === 'Installment') {
      const courseFees = parseFloat(formData.totalCourseFee);
      const installmentCount = parseInt(value, 10);

      if (!isNaN(installmentCount) && installmentCount > 0) {
        const amountPay = (courseFees / installmentCount).toFixed(2);
        const pendingAmount = (courseFees - amountPay).toFixed(2);

        setFormData((prevFormData) => ({
          ...prevFormData,
          amountPay: amountPay,
          pendingAmount: pendingAmount,
        }));
      }
    }
  };
  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      paydate: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are validation errors, don't proceed with form submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const formattedDate = selectedDate.toISOString().split('T')[0];
const isConfirmed=window.confirm("Do you want to submit this form");

if(isConfirmed)
{
    try {
      const updatedFormData = {
        ...formData,
        paydate: formattedDate,
      };


      await axios.post('http://localhost:8080/payments', updatedFormData);
      console.log(formData);
       window.location.href = '/payment'; 
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }
  };


  const validateForm = (data) => {
    let errors = {};

    if (!data.regId) {
      errors.regId = 'Student ID is required';
    }
    if (!data.fullName) {
      errors.fullName = 'Student Name is required';
    }
    if (!data.courseId) {
      errors.courseId = 'Course ID is required';
    }
    if (!data.courseName) {
      errors.courseName = 'Course Name is required';
    }
    if (!data.totalCourseFee) {
      errors.totalCourseFee = 'Course Fees is required';
    }

    if (data.installcount && (isNaN(data.installcount) || data.installcount < 1 || data.installcount > 6)) {
      errors.installcount = 'Installment count must be a number between 1 and 6';
    }

    return errors;
  };
  

  const isInstallment = formData.paymentOption === 'Installment';

  return (
    <div
    style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1576358367/photo/happy-computer-science-professor-teaching-students-during-a-class-in-the-classroom.jpg?s=1024x1024&w=is&k=20&c=CVAkAMmhsnMMG8sk9EP0Vam41B9Z5EpAsYxQhUE-iDs=")', // Replace with your actual image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      
    }}>
      {isFormSubmitted ? (
        <p className="submitted-message">Form submitted successfully!</p>
      ) : (
        <div className="container " style={{width:'50%' ,backgroundColor:'rgba(255,255,255,0.8)'}}>
          <h1>Payment of Course Fee</h1>
          <form >
            <div>
              <label>Student ID:</label>
              <input type="number" name="regId" value={formData.regId} onChange={handleChange} />
              {errors.regId && <p className="error">{errors.regId}</p>}
            </div>

            <div>
              <label>Student Name:</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div>
              <label>Course ID:</label>
              <input type="number" name="courseId" value={formData.courseId} onChange={handleChange} />
              {errors.courseId && <p className="error">{errors.courseId}</p>}
            </div>

            <div>
              <label>Course Name:</label>
              <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} />
              {errors.courseName && <p className="error">{errors.courseName}</p>}
            </div>

            <div>
              <label>Course Fees:</label>
              <input type="number" name="totalCourseFee" value={formData.totalCourseFee} onChange={handleChange} />
              {errors.totalCourseFee && <p className="error">{errors.totalCourseFee}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="paymentOption">Payment Option:</label>
              <select
                id="paymentOption"
                name="paymentOption"
                value={formData.paymentOption}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Option</option>
                <option value="Full Pay">Full Pay</option>
                <option value="Installment">Installment</option>
              </select>
            </div>

            {isInstallment && (
              <div>
                <label>Installment Count:</label>
                <input type="text" name="installcount" value={formData.installcount} onChange={handleChange} />
                {errors.installcount && <p className="error">{errors.installcount}</p>}
              </div>
            )}

            {isInstallment && (
              <div>
                <label>Amount Pay:</label>
                <input
                  type="number"
                  name="amountPay"
                  value={formData.amountPay}
                  readOnly
                />
              </div>
            )}

            {isInstallment && (
              <div>
                <label>Pending Amount:</label>
                <input
                  type="number"
                  name="pendingAmount"
                  value={formData.pendingAmount}
                  readOnly
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="paymentType">Payment Type:</label>
              <select
                id="paymentType"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Type</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
                <option value="UPI Payment">UPI Payment</option>
              </select>
            </div>
            <div>
            <label htmlFor="date">Date : </label>
            <input
              type="date"
              id="datePicker"
              value={selectedDate.toISOString().split('T')[0]} // Convert to 'YYYY-MM-DD' format
              onChange={handleDateChange}
              max={new Date().toISOString().split('T')[0]} // Set the maximum date to today
            />
          </div><br/>
          <button type="submit" style={{borderRadius:'10px', marginLeft:'120px', marginRight:'120px'}} onClick={handleSubmit}>Submit</button>
          &nbsp;
            <Link to="/S5">
              <button style={{ borderRadius: '10px'}}> Back   </button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentFormComponent;
