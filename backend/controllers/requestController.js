const requestModel = require('../models/requestModel');

class requestController {

    // GET ALL REQUEST
    getRequests = async (req, res) => {
      try {
        const data = await requestModel.getAllRequest();
        res.json(data); 
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

    // ADD REQUEST
    addRequest = async (req, res) => {
        const { book_id, fullname, request_email, phone_number, request_message} = req.body;
        const newRequest = { book_id, fullname, request_email ,phone_number, request_message};
    
        try{
          const result = await requestModel.insertRequest(newRequest);
          res.status(201).json({ message: 'Request added successfully', result });
        }catch(err){
          res.status(500).json({ error: err.message });
        }
    };

    // DELETE REQUEST
    deleteRequest = async (req , res) => {
      const request_id = req.params.id
  
      try {
        const result = await requestModel.deleteRequest(request_id);
        res.status(200).json({ message: 'Request deleted successfully', result });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  
    }
}

module.exports = new requestController();