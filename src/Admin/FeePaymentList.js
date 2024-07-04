import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeePaymentList = () => {
  // State to store the fetched data
  const [feePayments, setFeePayments] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/payments/all');
        // Assuming your backend endpoint for fetching fee payments is 'http://your-backend-api-endpoint/fee-payments'
        
        // Set the fetched data to the state
        setFeePayments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1>Fee Payments List</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Registration ID</th>
            <th>Full Name</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Total Course Fee</th>
            <th>Payment Type</th>
            <th>Amount Paid</th>
            <th>Pending Amount</th>
            <th>Payment Option</th>
            <th>Installment Count</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {feePayments.map((payment) => (
            <tr key={payment.id}>
              <td className='text-center'>{payment.id}</td>
              <td className='text-center'>{payment.regId}</td>
              <td className='text-center'>{payment.fullName}</td>
              <td className='text-center'>{payment.courseId}</td>
              <td className='text-center'>{payment.courseName}</td>
              <td className='text-center'>{payment.totalCourseFee}</td>
              <td className='text-center'>{payment.paymentType}</td>
              <td className='text-center'>{payment.amountPay}</td>
              <td className='text-center'>{payment.pendingAmount}</td>
              <td className='text-center'>{payment.paymentOption}</td>
              <td className='text-center'>{payment.installcount}</td>
              <td className='text-center'>{payment.paydate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeePaymentList;
