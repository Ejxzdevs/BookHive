const connect = require('../config/db');

class Request {

    static async getAllRequest(){
        const query = "SELECT * FROM requests INNER JOIN books ON requests.book_id = books.book_id ";
        try {
            const [result] = await connect.promise().query(query);
            return result;
        } catch (error) {
            throw new Error('Error inserting request');
        }
    }

    static async insertRequest(request) {
        const query = "INSERT INTO REQUESTS (book_id, fullname, request_email , phone_number, request_message) VALUES (?)";
        const values = [request.book_id, request.fullname, request.request_email, request.phone_number, request.request_message];
        try {
            const [result] = await connect.promise().query(query, [values]);
            return result;
        } catch (error) {
            throw new Error('Error inserting request');
        }
    }

    static async deleteRequest(id) {
        const query = " DELETE FROM requests WHERE request_id = ? ";
        const value = [id];
        try {
            const [result] = await connect.promise().query(query,value)
            return result;
        } catch (error) {
            console.error('Error deleting request: ', error);
            throw new Error('Error deleting request');
        }
    }
  
}

module.exports = Request;
