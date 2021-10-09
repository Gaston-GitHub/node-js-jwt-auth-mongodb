// Setup Express web server 

const express = require('express'); // express is for building the Rest apis

const cors = require('cors'); // provides Express middleware toenable CORS

const app = express();

let corseOptions = {
    origin: 'https://localhost:8081'
};

const db = require('./app/models');
const Role = db.role;

db.mongoose
    .connect(`mongodb://${db.Config.HOST}:${dbConfig.PORT}/${db.Config.DB}`, {
        userNewUrlParser: true,
        userUnifiedTopology: true
    })
    .then(() => {
        console.log('Successfully connected to MongoDB.');
        initial();
    })
    .catch(err => {
        console.error('Connection error', err)
        process.exit()
    })

app.use(cors(corseOptions));

app.use(express.json()); // parse request of content type - application/JSON

app.use(express.urlencoded({ extended: true })); // parse request of content type

//simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my app' });
});

//routes

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// initial functions help to create 3 importante rows in roles collection
function initial() {
    Role.estimatedDocumentCount((err, couunt) => {
        if(!err && count === 0) {
            new Role({
                name: 'user'
            }).save(err => {
                if(err) {
                    console.log('error', err)
                }
                console.log("added 'user' to roles collection");
            });

            new Role({
                name: 'moderator'
            }).save(err => {
                if(err) {
                    console.log('error', err);
                }
                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: 'admin',
            }).save(err => {
                if(err) {
                    console.log('error', err)
                }
                console.log("added 'admin' to roles collection")
            });
        }
    });
}