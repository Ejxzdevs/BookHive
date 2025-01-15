const InquiryModel = require('../models/inquiryModel');

class InquiryController {
  // GET ALL INQUIRIES
  getInquiries = async (req, res) => {
    try {
      const data = await InquiryModel.getAllInquiries();
      res.json(data); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // ADD NEW INQUIRY
  addInquiry = async (req, res) => {
    const { inquiry_name, inquiry_email, inquiry_message } = req.body;
    const newInquiry = { inquiry_name, inquiry_email, inquiry_message };

    try {
      const result = await InquiryModel.insertInquiry(newInquiry);
      res.status(201).json({ message: 'Inquiry added successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // DELETE INQUIRY
  deleteInquiry = async (req, res) => {
    const id = req.params.id

    try {
      const result = await InquiryModel.deleteInquiry(id);
      res.status(200).json({ message: 'Inquiry deleted successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

  }
}

module.exports = new InquiryController();
