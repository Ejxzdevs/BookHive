import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userLogin = async (data: { user_email: string; user_password: string }) => {
  try {
    const response = await apiClient.post('/user/Login', data);
    return response.data; 
  } catch (error) {
    console.error('Error Login:', error);
    throw error; 
  }
};
