import axios from 'axios';

// Axios client setup
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',  // Base URL for API
  headers: {
    'Content-Type': 'application/json',
  },
});

// API function to send request data
export const insertRequest = async (data: { book_id: string; fullname: string; request_email: string; phone_number: string; request_message: string | null }) => {
  try {
    const response = await apiClient.post('/request/add', data);
    return response.data; 
  } catch (error) {
    console.error('Error inserting request:', error);
    throw error; 
  }
};
