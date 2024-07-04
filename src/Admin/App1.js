
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const App1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-4">
        <Link to="/carddetails" className="text-decoration-none">
            <div className="card">
              <img src="https://c4.wallpaperflare.com/wallpaper/760/223/715/plastic-money-credit-cards-visa-wallpaper-preview.jpg" className="card-img-top" alt="Credit Card" />
              <div className="card-body text-center">
                <h5 className="card-title">Credit Card</h5>
              </div>
            </div>
          </Link>        
        </div>
        <div className="col-md-6 mb-4">
          <Link to="/netbanking" className="text-decoration-none">
            <div className="card">
              <img src="https://img.freepik.com/premium-vector/banking-service-background-bank-building-icon-made-with-currency-symbols-dollar-euro-yen-pound-icons_127544-803.jpg" className="card-img-top" alt="Net Banking" />
              <div className="card-body text-center">
                <h5 className="card-title">Net Banking</h5>
              </div>
            </div>
          </Link>        
        </div>
        <br></br>
        <div className="col-md-6">
        <Link to="/carddetails" className="text-decoration-none">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzomafEfqJ1LXuVD-ZxidsRVFPRrGEFuhCz-dN-wc6WQ&s" className="card-img-top" alt="Debit Card" />
              <div className="card-body text-center">
                <h5 className="card-title">Debit Card</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6">
        <Link to="/upi" className="text-decoration-none">
            <div className="card">
              <img src="https://t4.ftcdn.net/jpg/04/78/81/87/240_F_478818798_PLT3J01CQM1UknqjDIDZ0Dnjz0EhhcpD.jpg" className="card-img-top" alt="UPI Payment" />
              <div className="card-body text-center">
                <h5 className="card-title">UPI Payment</h5>
              </div>
            </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default App1;
