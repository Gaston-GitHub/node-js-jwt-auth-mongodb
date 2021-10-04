// create middleware functions 
// to verify signup we need two functions:
// check duplications for username and email
// check if roles in the request is legal or not

const db = require('../models');
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if(err) {
            res.status(500).send({ message:err });
            return;
        }

    // Email
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if(err) {
            res.status(500).send({ message:err });
            return;
        }

        next();
    });
  });
};

checkRoleExisted = () => {
    if(req.body.roles) {
        for(let i=0; i < req.body.roles.length; i++) {
            if(!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`
                });
                return;
            }
        }
    }
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRoleExisted
};

module.exports = verifySignUp;