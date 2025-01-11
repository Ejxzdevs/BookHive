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

// INSERT NEWS
export const insertNews = async (data: { news_title: string; news_content: string; image_url: File; }) => {
  try {
    const formData = new FormData();
    formData.append('news_title', data.news_title);
    formData.append('news_content', data.news_content);
    formData.append('image_url', data.image_url);
    const response = await apiClient.post('/news/add', formData);

    return response.data; 
  } catch (error) {
    console.error('Error inserting book:', error);
    throw error; 
  }
};

export const updateNews = async (data: { news_title: string; news_content: string; image: File | string ; news_id: number | undefined }) => {
  try {
    const formData = new FormData();
    formData.append('news_title', data.news_title);
    formData.append('news_content', data.news_content);
    formData.append('image_url', data.image ? data.image : '');
    const response = await apiClient.patch(`/news/update/${data.news_id}`, formData);
    return response.data; 
  } catch (error) {
    console.error('Error updating news:', error);
    throw error; 
  }
};

// DELETE NEWS
export const deleteNews = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.delete(`/news/delete/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error deleting news:', error);
    throw new Error('There was an error deleting the news. Please try again.');
  }
};