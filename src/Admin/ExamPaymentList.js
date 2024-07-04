import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExamPaymentList = () => {
  // State to store the fetched data
  const [examPayments, setExamPayments] = useState([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getall');
        // Assuming your backend endpoint for fetching exam payments is 'http://your-backend-api-endpoint/exam-payments'

        // Set the fetched data to the state
        setExamPayments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <h1>Exam Payments List</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Registration ID</th>
            <th>Full Name</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Exam Fees</th>
            <th>Payment Type</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {examPayments.map((payment) => (
            <tr key={payment.id}>
              <td className='text-center'>{payment.id}</td>
              <td className='text-center'>{payment.regId}</td>
              <td className='text-center'>{payment.fullName}</td>
              <td className='text-center'>{payment.courseId}</td>
              <td className='text-center'>{payment.courseName}</td>
              <td className='text-center'>{payment.examFees}</td>
              <td className='text-center'>{payment.paymentType}</td>
              <td className='text-center'>{payment.paydate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamPaymentList;
