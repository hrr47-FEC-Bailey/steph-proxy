const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;
const app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Proxy listening on port ${port}`);
});