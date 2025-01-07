const requestModel = require('../models/requestModel');

class requestController {

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
}

module.exports = new requestController();