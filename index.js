const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/routes');
const PORT = 9000;

//initialize express, cors, and body-parser
const app = express().use(cors())
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());

//initilalize router
router(app);

//test serve at root
app.get('/', (req, res) => {
  res.send(`Node and Express are running on port: ${PORT}`);
  console.log('server hit at root')
});

//spin up server
app.listen (PORT, () => {
  console.log(`Your server is running at port: ${PORT}`);
});
