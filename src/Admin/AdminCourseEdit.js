import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AdminCourseEdit = ({onCancelEdit, onEditCourse }) => {
  const [formData, setFormData] = useState({
    // courseid: courseid,
    coursename: '',
    registrationfees: '',
    coursefees: '',
    totalfees: '',
  });
  const {id}=useParams()
  const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         if (courseid) {
//           const response = await axios.get(`http://localhost:8080/getfee/${courseid}`);
//           setFormData(response.data);
//           console.log(response);
//         } else {
//           console.error('Course ID is undefined.');
//         }
//       } catch (error) {
//         console.error('Error fetching course data:', error);
//       }
//     };
//     fetchCourse();
//   }, [courseid]); // Include courseid as a dependency
useEffect(() => {
    axios.get(`http://localhost:8080/getfee/${id}`)
      .then((res) => {
        console.log(res.data);
        setFormData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!validateForm()) {
    //   return;
    // }

    const confirmed = window.confirm(`Are you sure you want to update the details?`);
    

    if (!confirmed) {
      return;
    }

    axios.put(`http://localhost:8080/editfee/${id}`, formData)
      .then(() => {

        window.alert(`  details Updated Successfully!..`);

        navigate("/admincourses");
      })
      .catch((err) => {
        console.error(err);
      });
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
          type="text"
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
          type="text"
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
          type="text"
          id="totalfees"
          name="totalfees"
          value={formData.totalfees}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" style={{margin:'10px', marginLeft:'605px', marginRight:'605px'}}>Edit Course</button><br></br>
      <Link to='/admincourses'><button type="button" onClick={onCancelEdit}>
        Cancel
      </button>
      </Link>
    </form>
  );
};

export default AdminCourseEdit;
