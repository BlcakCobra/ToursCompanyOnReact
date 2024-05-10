const express = require('express');
const { db } = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./api')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
