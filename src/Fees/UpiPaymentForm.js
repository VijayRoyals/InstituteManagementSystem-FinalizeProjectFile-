import React, { useState } from 'react';
import '../Fees/Bank.css'; // Import your CSS file for styling

const UpiPaymentForm = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!upiId) {
      errors.upiId = 'UPI ID is required';
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      errors.amount = 'Enter a valid amount';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePayment = () => {
    const isValid = validateForm();

    if (isValid) {
      // In a real application, you would send the UPI details to your backend
      // for processing the payment. This is a simplified example.
      console.log('Processing UPI payment');
    }
  };

  const backgroundImageUrl = 'https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?w=740&t=st=1705571568~exp=1705572168~hmac=0aedfa73049df10cedc977b95ce5125b32c55726023f01799aaf9f25befd44e4';

const backgroundStyle = {
  background: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
};

const formContainerStyle = {
  background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for the form container
  padding: '20px',
  borderRadius: '8px',
};

  return (
    <div className='body-container' style={{backgroundStyle}}>
    <div className="upi-payment-form-container" style={{}}>
      <h1>UPI Payment </h1>
      <div className="upi-form">
        <div className="form-group">
          <label>UPI ID:</label>
          <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
          {errors.upiId && <p className="error">{errors.upiId}</p>}
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
          {errors.amount && <p className="error">{errors.amount}</p>}
        </div>
        <button className="submit-button" onClick={handlePayment}>
          Make Payment
        </button>
      </div>
    </div>
    </div>
  );
};

export default UpiPaymentForm;
