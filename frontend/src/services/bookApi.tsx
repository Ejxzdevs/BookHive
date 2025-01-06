import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getAllBooks = async () => {
  try {
    const response = await apiClient.get('/books');
    return response.data; 
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

export const insertBook = async (data: { book_title: string; book_description: string; genre: string; author: string; image_url: File; }) => {
  try {

    const formData = new FormData();
    formData.append('book_title', data.book_title);
    formData.append('book_description', data.book_description);
    formData.append('genre', data.genre);
    formData.append('author', data.author);
    
    // Append the file to the FormData object
    formData.append('image_url', data.image_url);
    const response = await apiClient.post('/books/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; 
  } catch (error) {
    console.error('Error inserting book:', error);
    throw error; 
  }
};


export const updateBook = async (data: { book_title: string; book_description: string; genre: string; author: string; image: File | null ; id: number }) => {
  try {
    const formData = new FormData();
    formData.append('book_title', data.book_title);
    formData.append('book_description', data.book_description);
    formData.append('genre', data.genre);
    formData.append('author', data.author);
    formData.append('image_url', data.image ? data.image : '');
    const response = await apiClient.patch(`/books/update/${data.id}`, formData);

    return response.data; 
  } catch (error) {
    console.error('Error updating book:', error);
    throw error; 
  }
};


