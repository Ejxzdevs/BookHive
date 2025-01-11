const connect = require('../config/db');

class News {

    static async getAllNews() {
        const query = "SELECT * FROM news";
        try {
            const [results] = await connect.promise().query(query);
            return results; 
        } catch (error) {
            throw new Error('Error fetching News');
        }
    }

    static async insertNews(news) {
        const query = "INSERT INTO news (news_title, news_content, news_image) VALUES (?)";
        const values = [news.news_title, news.news_content ,news.image_url];
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

    static async deleteNews(id) {
        const query = " DELETE FROM news WHERE news_id = ? ";
        const value = [id];
        try {
            const [result] = await connect.promise().query(query,value)
            return result;
        } catch (error) {
            console.error('Error deleting news: ', error);
            throw new Error('Error deleting news');
        }
    }
}
module.exports = News;
