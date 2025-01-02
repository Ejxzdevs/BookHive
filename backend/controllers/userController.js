const UserModel = require('../models/userModel');

class userController {
  // GET USER
  getUser = async (req, res) => {
    const { user_email, user_password } = req.body;
    const userData = { user_email, user_password };
    try {
      const data = await UserModel.getUser(userData);
      res.json(data); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


}

module.exports = new userController();
