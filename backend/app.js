const express = require('express');
const bookRoutes = require('./routes/bookRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes')
const userRoutes = require('./routes/userRoutes')
const requestRoutes = require('./routes/requestRoutes')
const newsRoutes = require('./routes/newsRoutes')
const reportRoutes = require('./routes/reportRoutes')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('uploads'))
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/books', bookRoutes);
app.use('/inquiries', inquiryRoutes);
app.use('/user', userRoutes);
app.use('/request', requestRoutes);
app.use('/news', newsRoutes);
app.use('/report', reportRoutes);

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});
