import  axios from 'axios';

axios.defaults.baseURL ='http://localhost:3030';

// baseURL: 'https://connections-api.herokuapp.com',

export const addUserInfo = async(selectedFile,token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    
      const formData = new FormData();
      formData.append('photo', selectedFile);
    
      const response = await axios.post('/api/users/user', formData);
      return response.data;
    };
     
// export const addUserInfo = createAsyncThunk(
//     '/userInfo',
//     async (data, thunkAPI) => {
//       try {
//         const response = await axios.post('/api/users/:id', {
           
//           name: data.name,
//           email: data.email,
//           birthday:data.birthday,
//           phone:data.phone,
//           city:data.city
//         });
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }
//   );
