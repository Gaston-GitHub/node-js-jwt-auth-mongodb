// Initialize Mongoose
// After initialize mongoose, don't need to write CRUD functions
// because Mongoose support all of them.
// create new user: object.save()
// find User by Id: User.findById(id)
// find User by username: Username.findOne({ username: ... })
// finde all Roles which name in given roles array: Role.find({ name: {$in: roles}})

const mongoose = require('./user.model');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');

module.exports = db;