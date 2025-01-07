const connect = require('../config/db');

class Request {
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
  
}

module.exports = Request;
