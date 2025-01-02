// src/services/api.ts
import axios from 'axios';

// Axios client setup
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',  // Base URL for API
  headers: {
    'Content-Type': 'application/json',
  },
});

// API function to send inquiry data
export const postInquiry = async (data: { inquiry_name: string; inquiry_email: string; inquiry_message: string }) => {
  try {
    const response = await apiClient.post('/inquiries/add', data);
    return response.data; 
  } catch (error) {
    console.error('Error while posting inquiry:', error);
    throw error; 
  }
};
