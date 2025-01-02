const connect = require('../config/db');

class Account {

    static async getUser(data) {
        const query = 'SELECT * FROM ACCOUNT WHERE user_email = ? AND user_password = ?';
        try {
            const [results] = await connect.promise().query(query, [data.user_email, data.user_password]);
            return results;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching user data');
        }
    }
  
}

module.exports = Account;
