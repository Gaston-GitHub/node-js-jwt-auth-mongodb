// Define Mongoose model: User and Role model

const mongoose = require('mongoose');

const Role = mongoose.model(
    'Role', 
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;