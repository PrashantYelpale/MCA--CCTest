const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the project directory
app.use(express.static(path.join(__dirname)));

// Serve node_modules files
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
