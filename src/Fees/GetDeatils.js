import React,{useState} from 'react';
import CardValidator from 'card-validator';
import '../Fees/style.css'


const GetDeatils = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credit card details
    const cardNumberValidation = CardValidator.number(cardNumber);
    const expiryDateValidation = CardValidator.expirationDate(expiryDate);
    const cvcValidation = CardValidator.cvv(cvc);

    if (cardNumberValidation.isValid && expiryDateValidation.isValid && cvcValidation.isValid) {
      // Valid card details - you can perform further actions here (e.g., payment processing)
      alert('Payment successful!');
    } else {
      alert('Invalid card details. Please check and try again.');
    }
  };
    
    return (
      <form onSubmit={handleSubmit}>
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
        />
      </label>

      <label>
        Card Holder:
        <input
          type="text"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          placeholder="John Doe"
        />
      </label>

      <label>
        Expiry Date:
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          maxLength="5"
        />
      </label>

      <label>
        CVC:
        <input
          type="text"
          value={cvc}
          onChange={(e) => setCVC(e.target.value)}
          placeholder="123"
          maxLength="4"
        />
      </label>

      <button type="submit">Submit</button>
    </form>
    )
}

export default GetDeatils
