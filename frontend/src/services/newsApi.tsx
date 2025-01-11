import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

// GET NEWS
export const getAllNews = async () => {
  try {
    const response = await apiClient.get('/news');
    return response.data; 
  } catch (error) {
    console.error('Error fetching News:', error);
    throw error;
  }
}

export const deleteNews = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.delete(`/news/delete/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error deleting news:', error);
    throw new Error('There was an error deleting the news. Please try again.');
  }
};