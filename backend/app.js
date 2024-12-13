const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

app.use(express.json());

// BOOKS ROUTES
app.use('/books', bookRoutes);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
