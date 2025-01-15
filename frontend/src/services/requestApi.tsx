import axios from 'axios';

// Axios client setup
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',  // Base URL for API
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET REQUEST
export const getAllRequests = async () => {
  try {
    const response = await apiClient.get('/request');
    return response.data; 
  } catch (error) {
    console.error('Error fetching Requests:', error);
    throw error;
  }
}

// INSERT REQUEST
export const insertRequest = async (data: { book_id: string; fullname: string; request_email: string; phone_number: string; request_message: string | null }) => {
  try {
    const response = await apiClient.post('/request/add', data);
    return response.data; 
  } catch (error) {
    console.error('Error inserting request:', error);
    throw error; 
  }
};

// UPDATE REQUEST
export const updateRequest = async (id : number) => {
  try {
    const response = await apiClient.patch(`/request/update/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error updating request:', error);
    throw error; 
  }

}

// DELETE REQUEST
export const deleteRequest = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.delete(`/request/delete/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error deleting Request:', error);
    throw new Error('There was an error deleting the Request. Please try again.');
  }
};
