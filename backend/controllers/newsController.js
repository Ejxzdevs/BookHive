const NewsModel = require('../models/newsModel');

class NewsController {

  // GET NEWS
  getNews = async (req, res) => {
    try {
      const data = await NewsModel.getAllNews();
      res.json(data); 
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // ADD NEWS
  addNews = async (req, res) => {
    const { news_title, news_content } = req.body;
    let image_url = (req.file && req.file.filename) ? `${req.file.filename}` : '';
    const newNews = { news_title, news_content, image_url };

    try {
      const result = await NewsModel.insertNews(newNews);
      res.status(201).json({ message: 'News added successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  // UPDATE BOOK
  updateNews = async (req , res) => {
    const { news_title, news_content } = req.body;
    let image_url = (req.file && req.file.filename) ? `${req.file.filename}` : '';
    const news_id = req.params.id
    const updateNews = {news_id, news_title, news_content ,image_url};
    
    try {
      const result = await NewsModel.updateNews(updateNews);
      res.status(200).json({ message: 'News updated successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // DELETE NEWS
  deleteNews = async (req , res) => {
    const news_id = req.params.id

    try {
      const result = await NewsModel.deleteNews(news_id);
      res.status(200).json({ message: 'News deleted successfully', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }

  }
}

module.exports = new NewsController();
