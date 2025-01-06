import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

// GET BOOKS
export const getAllBooks = async () => {
  try {
    const response = await apiClient.get('/books');
    return response.data; 
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
}

// INSERT BOOK
export const insertBook = async (data: { book_title: string; book_description: string; genre: string; author: string; image_url: File; }) => {
  try {
    const formData = new FormData();
    formData.append('book_title', data.book_title);
    formData.append('book_description', data.book_description);
    formData.append('genre', data.genre);
    formData.append('author', data.author);
    formData.append('image_url', data.image_url);
    const response = await apiClient.post('/books/add', formData);

    return response.data; 
  } catch (error) {
    console.error('Error inserting book:', error);
    throw error; 
  }
};

//  UPDATE BOOK
export const updateBook = async (data: { book_title: string; book_description: string; genre: string; author: string; image: File | string ; id: number | undefined }) => {
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

// DELETE BOOK
export const deleteBook = async ({ id }: { id: number }) => {
  try {
    const response = await apiClient.delete(`/books/delete/${id}`);
    return response.data; 
  } catch (error) {
    console.error('Error deleting book:', error);
    throw new Error('There was an error deleting the book. Please try again.');
  }
};