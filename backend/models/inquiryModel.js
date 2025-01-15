const connect = require('../config/db');

class Request {

    // GET ALL INQUIRY
    static async getAllInquiries() {
        const query = "SELECT * FROM INQUIRIES";
        try {
            const [results] = await connect.promise().query(query);
            return results; 
        } catch (error) {
            throw new Error('Error fetching inquiries');
        }
    }

    // INSERT INQUIRY
    static async insertInquiry(inquiry) {
        const query = "INSERT INTO INQUIRIES (inquiry_name, inquiry_email, inquiry_message) VALUES (?)";
        const values = [inquiry.inquiry_name, inquiry.inquiry_email, inquiry.inquiry_message];
        try {
            const [result] = await connect.promise().query(query, [values]);
            return result;
        } catch (error) {
            throw new Error('Error inserting inquiry');
        }
    }

    // UPDATE STATUS INQUIRY
    static async updateInquiryStatus(id) {
        const query = "UPDATE inquiries SET inquiry_status = ? WHERE inquiry_id = ?";
        const values = ['Read', id];
        try {
            const [result] = await connect.promise().query(query,values);
            return result;
        } catch (error) {
            throw new Error('Error updating inquiry');
        }
    }

    // DELETE INQUIRY
    static async deleteInquiry(id) {
        const query = "DELETE FROM inquiries WHERE inquiry_id = ? ";
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
