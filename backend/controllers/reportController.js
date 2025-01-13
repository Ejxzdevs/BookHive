const ReportModel = require('../models/reportModel');

class reportController {

  // GET NEWS
  getReports = async (req, res) => {
    try {
      const data = await ReportModel.getAllReports();
      res.json(data); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // ADD REPORT
  addReport = async (req, res) => {
    const { report_name } = req.body;
    const newReport = { report_name };

    try {
      const result = await ReportModel.insertReport(newReport);
      res.status(201).json({ message: 'Report added successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

   // DELETE REPORTS
   deleteReport = async (req , res) => {
    const report_id = req.params.id

    try {
      const result = await ReportModel.deleteReport(report_id);
      res.status(200).json({ message: 'Report deleted successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

  }
}

module.exports = new reportController();
