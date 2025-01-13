const ReportModel = require('../models/reportModel');

class reportController {

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
}

module.exports = new reportController();
