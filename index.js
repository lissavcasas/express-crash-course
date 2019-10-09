const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger')
const app = express();

// Set public folder
/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
}); */

// Init middleware
/* app.use(logger); */

//Body Parser Middleware
app.use(express.json()); //handle json
app.use(express.urlencoded({extended: false})); //handle form submission (handleurl encoded data)

// Set static folder
app.use(express.static(path.join(__dirname,'public'))); // use: method used when you want to include middlewares

//Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});





