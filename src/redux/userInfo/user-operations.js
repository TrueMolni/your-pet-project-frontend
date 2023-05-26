import  axios from 'axios';

axios.defaults.baseURL ='http://localhost:3030';

// baseURL: 'https://connections-api.herokuapp.com',

export const addUserPhoto = async(selectedFile,token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    
      const formData = new FormData();
      formData.append('photo', selectedFile);
      console.log(formData);

      try {
      const response = await axios.post('/api/users/user', formData);
      return response.data;}catch(e){

      }
    };
     
export const addUserInfoString = async (name,value, token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
 
        try {
        const response = await axios.patch('/api/users/user',{
          [name]:value
        }
        );
        return response.data;
      } catch (e) {
        return console.log(e.message);
      }
    };

    export const getUserInfo = async (token) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
     
            try {
            const response = await axios.get('/api/users/user');
            return response.data;
          } catch (e) {
            return console.log(e.message);
          }
        };


 
