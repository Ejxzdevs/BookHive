// src/services/api.ts
import axios from 'axios';

// Axios client setup
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',  // Base URL for API
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET INQUIRIES
export const getAllInquiry = async () => {
  try {
    const response = await apiClient.get('/inquiries');
    return response.data; 
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    throw error;
  }
}

// INSERT INQUIRY
export const postInquiry = async (data: { inquiry_name: string; inquiry_email: string; inquiry_message: string }) => {
  try {
    const response = await apiClient.post('/inquiries/add', data);
    return response.data; 
  } catch (error) {
    console.error('Error while posting inquiry:', error);
    throw error; 
  }
};

// UPDATE INQUIRY

export const updateInquiryStatus = async (id : number) => {
  try {
    const response = await apiClient.patch(`/inquiries/update/${id}`);
    return response.data; 
  } catch (error) {
    console.log("error while updating inquiry status", error)
  }
}

// DELETE INQUIRY
export const deleteInquiry = async (id : number) => {
  try {
    const response = await apiClient.delete(`/inquiries/delete/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error while posting inquiry:', error);
    throw error; 
  }
};
