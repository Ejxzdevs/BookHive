const connect = require('../config/db');

class News {

    // GET
    static async getAllNews() {
        const query = "SELECT * FROM news";
        try {
            const [results] = await connect.promise().query(query);
            return results; 
        } catch (error) {
            throw new Error('Error fetching News');
        }
    }

    // ADD
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

    // UPDATE
    static async updateNews(news) {
        const query = `
        UPDATE news
        SET news_title = ?, news_content = ?, news_image = COALESCE(?, news_image)
        WHERE news_id = ?
        `;
        const values = [news.news_title, news.news_content, news.image_url ? news.image_url : null, news.news_id];
        
        try {
            const [result] = await connect.promise().query(query, values);
            return result;
        } catch (error) {
            console.error('Error updating news: ', error);
            throw new Error('Error updating news');
        }
    }

    // DELETE
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
