const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// ROUTES
app.use('/books', bookRoutes);
app.use('/inquiries', inquiryRoutes);
app.use('/user', userRoutes);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
