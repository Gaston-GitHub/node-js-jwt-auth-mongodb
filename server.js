// Setup Express web server 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'https://localhost:8081'
};

app.use(cors(corseOptions));

app.use(bodyParser.json()); // parse request of content type - application/JSON

app.use(bodyParser.urlencoded({ extender: true })); // parse request of content type

app.get('/', (req, res) => )