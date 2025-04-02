const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
 
// Serve blocksdk.js from the root directory
app.get('/blocksdk.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'blocksdk.js'));
});
 
// Serve script.js from the root directory
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'script.js'));
});
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
 
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
