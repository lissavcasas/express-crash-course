const express = require('express');
const path = require('path');
const members = require('./Members')
const logger = require('./middlewares/logger')
const app = express();

// Set public folder
/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','index.html'));
}); */

// Init middleware
/* app.use(logger); */

// Get all members
app.get('/api/members', (req, res) => res.json(members));

//Get Single Member
app.get('/api/members/:id', (req, res) => {
  /* res.send(req.params.id); */

  const found = members.some(member => member.id === parseInt(req.params.id));
  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No member with thte id of ${req.params.id}` });
  }
});

// Set static folder
app.use(express.static(path.join(__dirname,'public'))); // use: method used when you want to include middlewares

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});





