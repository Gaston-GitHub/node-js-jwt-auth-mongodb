// Setup Express web server 

const express = require('express'); // express is for building the Rest apis

const cors = require('cors'); // provides Express middleware toenable CORS

const app = express();

let corseOptions = {
    origin: 'https://localhost:8081'
};

app.use(cors(corseOptions));

app.use(express.json()); // parse request of content type - application/JSON

app.use(express.urlencoded({ extended: true })); // parse request of content type

//simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my app' });
});

// set port, listen for request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});