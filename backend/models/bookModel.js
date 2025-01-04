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
        const query = "INSERT INTO BOOKS (book_title, book_description, image_url) VALUES (?)";
        const values = [book.book_title, book.book_description , book.image_url];
        try {
            const [result] = await connect.promise().query(query, [values]);
            return result;
        } catch (error) {
            throw new Error('Error inserting book');
        }
    }
}

module.exports = Book;
