const express = require('express');
const path = require('path');
const dataHandler = require('./dataHandler');
const router = express.Router();
const app = express();
const port = 3030;

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/getJiraTickets', (req, res) => {
  res.json({ jirasObject: dataHandler.jirasObject });
});

app.use('/', router);
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
