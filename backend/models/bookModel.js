const connect = require('../config/db');

class Book {

    static async getAllBooks() {
        const query = "SELECT * FROM BOOKS";
        try {
            const [results] = await connect.promise().query(query);
            return results; 
        } catch (error) {
            throw new Error('Error fetching books');
        }
    }

    static async insertBook(book) {
        const query = "INSERT INTO BOOKS (book_title, book_description, genre , author, image_url) VALUES (?)";
        const values = [book.book_title, book.book_description ,book.genre,book.author, book.image_url];
        try {
            const [result] = await connect.promise().query(query, [values]);
            return result;
        } catch (error) {
            throw new Error('Error inserting book');
        }
    }

    static async updateBook(book) {
        const query = `
        UPDATE books
        SET book_title = ?, book_description = ?, genre = ?, author = ?, image_url = COALESCE(?, image_url)
        WHERE book_id = ?
        `;
        const values = [book.book_title, book.book_description, book.genre, book.author, book.image_url ? book.image_url : null, book.book_id];
        
        try {
            const [result] = await connect.promise().query(query, values);
            return result;
        } catch (error) {
            console.error('Error updating book: ', error);
            throw new Error('Error updating book');
        }
    }

    static async deleteBook (id) {
        const query = " DELETE FROM books WHERE book_id = ? ";
        const value = [id];
        try {
            const [result] = await connect.promise().query(query,value)
            return result;
        } catch (error) {
            console.error('Error deleting book: ', error);
            throw new Error('Error deleting book');
        }
    }
}
module.exports = Book;
