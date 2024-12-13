const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// BOOKS ROUTES
app.use('/books', bookRoutes);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
