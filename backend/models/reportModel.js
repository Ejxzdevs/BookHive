const connect = require('../config/db');

class Report {

    // GET ALL REPORTS
    static async getAllReports() {
        const query = "SELECT * FROM reports";
        try {
            const [results] = await connect.promise().query(query);
            return results; 
        } catch (error) {
            throw new Error('Error fetching Reports');
        }
    }

    // CREATE NEW REPORT
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

      // DELETE REPORT
      static async deleteReport(id) {
        const query = " DELETE FROM reports WHERE report_id = ? ";
        const value = [id];
        try {
            const [result] = await connect.promise().query(query,value)
            return result;
        } catch (error) {
            console.error('Error deleting Report: ', error);
            throw new Error('Error deleting Report');
        }
    }
}

module.exports = Report;
