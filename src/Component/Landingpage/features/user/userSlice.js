// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { registerUser, loginUser as apiLoginUser, logoutUser as apiLogoutUser, fetchUserDetails, updateUserDetails } from './userAPI';

// // Async thunk for registering a user
// export const registerUserAsync = createAsyncThunk(
//   'user/register',
//   async (userData) => {
//     const response = await registerUser(userData);
//     return response.data;
//   }
// );

// // Async thunk for logging in a user
// export const loginUserAsync = createAsyncThunk(
//   'user/login',
//   async (userData) => {
//     const response = await apiLoginUser(userData); // Changed from loginUser to apiLoginUser
//     return response.data;
//   }
// );

// // Async thunk for logging out a user
// export const logoutUserAsync = createAsyncThunk(
//   'user/logout',
//   async () => {
//     const response = await apiLogoutUser(); // Changed from logoutUser to apiLogoutUser
//     return response.data;
//   }
// );

// // Async thunk for fetching user details
// export const fetchUserDetailsAsync = createAsyncThunk(
//   'user/fetchDetails',
//   async () => {
//     const response = await fetchUserDetails();
//     return response.data;
//   }
// );

// // Async thunk for updating user details
// export const updateUserDetailsAsync = createAsyncThunk(
//   'user/updateDetails',
//   async (userData) => {
//     const response = await updateUserDetails(userData);
//     return response.data;
//   }
// );

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     // Standard reducer for logging out the user
//     logoutUser: (state) => {
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Register user reducers
//       .addCase(registerUserAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(registerUserAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//       })
//       .addCase(registerUserAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       // Login user reducers
//       .addCase(loginUserAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(loginUserAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//       })
//       .addCase(loginUserAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       // Logout user reducers
//       .addCase(logoutUserAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(logoutUserAsync.fulfilled, (state) => {
//         state.status = 'idle';
//         state.user = null;
//       })
//       .addCase(logoutUserAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       // Fetch user details reducers
//       .addCase(fetchUserDetailsAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchUserDetailsAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//       })
//       .addCase(fetchUserDetailsAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       // Update user details reducers
//       .addCase(updateUserDetailsAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(updateUserDetailsAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//       })
//       .addCase(updateUserDetailsAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { logoutUser } = userSlice.actions; // Exporting logoutUser directly from userSlice

// export const selectUser = (state) => state.user.user;
// export const selectStatus = (state) => state.user.status;
// export const selectError = (state) => state.user.error;

// export default userSlice.reducer;
