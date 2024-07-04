import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminCourseAdd = ({ onAddCourse }) => {
  const [formData, setFormData] = useState({
    courseid: '',
    coursename: '',
    registrationfees: '',
    coursefees: '',
    totalfees: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/feedetails', formData);
    //   onAddCourse();
      console.log(formData);
      setFormData({
        courseid: '',
        coursename: '',
        registrationfees: '',
        coursefees: '',
        totalfees: '',
      });
      navigate("/admincourses");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="courseid">Course ID:</label>
        <input
          type="number"
          id="courseid"
          name="courseid"
          value={formData.courseid}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="coursename">Course Name:</label>
        <input
          type="text"
          id="coursename"
          name="coursename"
          value={formData.coursename}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="registrationfees">Registration Fees:</label>
        <input
          type="number"
          id="registrationfees"
          name="registrationfees"
          value={formData.registrationfees}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="coursefees">Course Fees:</label>
        <input
          type="number"
          id="coursefees"
          name="coursefees"
          value={formData.coursefees}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="totalfees">Total Fees:</label>
        <input
          type="number"
          id="totalfees"
          name="totalfees"
          value={formData.totalfees}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" style={{margin:'10px', marginLeft:'500px', marginRight:'500px'}}>Add Course</button><br/>
      <Link to="/admincourses">
        <button type="button">Back to Admin Courses</button>
      </Link>
    </form>
  );
};

export default AdminCourseAdd;
