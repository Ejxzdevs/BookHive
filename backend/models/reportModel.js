const connect = require('../config/db');

class Report {

    static async insertReport(report) {
        const query = "INSERT INTO reports (report_name) VALUES (?)";
        const values = [report.report_name];
        try {
            const [result] = await connect.promise().query(query, values);
            return result;
        } catch (error) {
            throw new Error('Error inserting report');
        }
    }
}

module.exports = Report;
