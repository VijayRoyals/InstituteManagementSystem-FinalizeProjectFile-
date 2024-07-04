
import * as React from 'react';
import { Container, TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const LoginPageComp = () => {
  const nav = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userType, setUserType] = React.useState('');
  const [error, setError] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');


  

  // Array of valid usernames
  const validUsernames = ['admin', 'student', 'trainer', 'manoj', 'vijay', 'rahul', 'devanathan', 'guest', 'test', 'test1', 'panchashil'];





  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if username is valid and password matches username
    if (validUsernames.includes(username) && username === password) {
      // Simulating a successful login response
      sessionStorage.setItem('user', username);

      // Handle navigation based on userType
      switch (userType) {
        case 'student':
          if (!['admin', 'trainer'].includes(username)) {
            nav('/stdcrud');
          } else {
            setError('Invalid user type for student.');
          }
          break;
        case 'trainer':
          if (username === 'trainer') {
            nav('/trainercrud');
          } else {
            setError('Invalid user type for trainer.');
          }
          break;
        case 'admin':
          if (username === 'admin') {
            nav('/admincrud');
          } else {
            setError('Invalid user type for admin.');
          }
          break;
        default:
          setError('Please select a user type');
      }
    } else {
      setError('Invalid user data. Please enter correct username and matching password.');
    }
  };

  const validateForm = () => {
    let valid = true;
    if (username.trim() === '') {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (userType.trim() === '') {
      setError('Please select a user type');
      valid = false;
    } else {
      setError('');
    }

    return valid;
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const LoginPageComp = () => {
    // Component code here
  };
  
  

 
  return (
    <Container maxWidth="sm">
      <Box mt={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box sx={{ width: '100%', maxWidth: 360 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              error={Boolean(usernameError)}
              helperText={usernameError}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              error={Boolean(passwordError)}
              helperText={passwordError}
            />

            <TextField
              select
              label="User Type"
              value={userType}
              onChange={handleUserTypeChange}
              fullWidth
              margin="normal"
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="trainer">Trainer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Login
            </Button>

          </form>
          <Box mt={2}>
            <Button component={Link} to="/RegistrationPage" variant="text" fullWidth>
              Student Register Here
            </Button>
          </Box>
        </Box>
        {error && (
          <Box mt={2}>
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default LoginPageComp;



























// import * as React from 'react';
// import { Container, TextField, Button, Box, Typography, MenuItem } from '@mui/material';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const LoginPageComp = () => {
//   const nav = useNavigate();
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [userType, setUserType] = React.useState('');
//   const [error, setError] = React.useState('');
//   const [usernameError, setUsernameError] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState('');
//   const [productData, setProductData] = React.useState(null);
//   const navigate = useNavigate();

//   // Array of valid usernames
//   const validUsernames = ['admin', 'student', 'trainer', 'manoj', 'vijay', 'rahul', 'devanathan', 'guest', 'test', 'test1', 'panchashil'];

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     // Check if username is valid and password matches username
//     if (validUsernames.includes(username) && username === password) {
//       // Simulating a successful login response
//       sessionStorage.setItem('user', username);
//       switch (userType) {
//         case 'student':
//           nav('/stdcrud');
//           break;
//         case 'trainer':
//           nav('/trainercrud');
//           break;
//         case 'admin':
//           nav('/admincrud');
//           break;
//         default:
//           alert('Please select a user type');
//       }
//     } else {
//       setError('Invalid user data. Please enter correct username and matching password.');
//     }
//   };

//   const validateForm = () => {
//     let valid = true;
//     if (username.trim() === '') {
//       setUsernameError('Username is required');
//       valid = false;
//     } else {
//       setUsernameError('');
//     }

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (userType.trim() === '') {
//       setError('Please select a user type');
//       valid = false;
//     } else {
//       setError('');
//     }

//     return valid;
//   };

//   const handleUserTypeChange = (event) => {
//     setUserType(event.target.value);
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={8} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography variant="h4" gutterBottom>
//           Login
//         </Typography>
//         <Box sx={{ width: '100%', maxWidth: 360 }}>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               label="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//               error={Boolean(usernameError)}
//               helperText={usernameError}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               fullWidth
//               margin="normal"
//               variant="outlined"
//               required
//               error={Boolean(passwordError)}
//               helperText={passwordError}
//             />

//             <TextField
//               select
//               label="User Type"
//               value={userType}
//               onChange={handleUserTypeChange}
//               fullWidth
//               margin="normal"
//             >
//               <MenuItem value="student">Student</MenuItem>
//               <MenuItem value="trainer">Trainer</MenuItem>
//               <MenuItem value="admin">Admin</MenuItem>
//             </TextField>

//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//             >
//               Login
//             </Button>

//           </form>
//           <Box mt={2}>
//             <Button component={Link} to="/RegistrationPage" variant="text" fullWidth>
//               Student Register Here
//             </Button>
//           </Box>
//         </Box>
//         {error && (
//           <Box mt={2}>
//             <Typography variant="body2" color="error">
//               {error}
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default LoginPageComp;


