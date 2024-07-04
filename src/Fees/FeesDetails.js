import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class FeesDetails extends Component {
  state = {
    studName: '',
    courseId: '',
    courseName: '',
    feesAmount: '',
    payType: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { studName, courseId, courseName, feesAmount, payType } = this.state;

    axios.post('http://localhost:8080', {
      studName,
      courseId,
      courseName,
      feesAmount,
      payType,
    })
      .then(response => {
        console.log('Student created:', response.data);
        // Handle success, e.g., show a success message or redirect
      })
      .catch(error => {
        console.error('Error creating student:', error);
        // Handle error, e.g., show an error message
      });
  };

  render() {
    const { studName, courseId, courseName, feesAmount, payType } = this.state;

    return (
      <div className="container-fluid">
        

          {/* Main Content */}
          <div className="col-md-9">
            <table className="table">
              <thead>
                <tr>
                  <th>STUD_ID</th>
                  <th>STUD_NAME</th>
                  <th>COURSE_ID</th>
                  <th>COURSE_NAME</th>
                  <th>FEES_AMOUNT</th>
                  <th>PAY_TYPE</th> 
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{studName}</td>
                  <td>{courseId}</td>
                  <td>{courseName}</td>
                  <td>{feesAmount}</td>
                  <td>{payType}</td>
                </tr>
              </tbody>
            </table>

            {/* Form for adding a new student */}
            <form onSubmit={this.handleSubmit}>
              <label>
                Student Name:
                <input
                  type="text"
                  name="studName"
                  value={studName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Course ID:
                <input
                  type="text"
                  name="courseId"
                  value={courseId}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Course Name:
                <input
                  type="text"
                  name="courseName"
                  value={courseName}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Fees Amount:
                <input
                  type="text"
                  name="feesAmount"
                  value={feesAmount}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label>
                Pay Type:
                <input
                  type="text"
                  name="payType"
                  value={payType}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
  }
}

export default FeesDetails;
