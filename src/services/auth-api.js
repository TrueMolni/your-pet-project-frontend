import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://your-pet-project-backend.onrender.com',

});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};
export const signUp = async data => {
  const { data: result } = await instance.post('api/users/register', data);
  setToken(result.token);
  
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('api/users/login', data);
  // console.log(result.token)
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('api/users/info');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('api/users/logout');
  setToken();
  return data;
};

export default instance;
