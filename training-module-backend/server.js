
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/videos', videoRoutes);
app.use('/progress', progressRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
