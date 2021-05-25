const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('listening on port 3000');
})

app.use(express.static('client'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/index.html'));
})