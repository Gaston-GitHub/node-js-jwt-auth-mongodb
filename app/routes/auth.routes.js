// Define routes: when client sends request for an endpoint using http request
// (GET, POST, PUT, DELETE),  we need to determine how the server will response by
// setting up the routes. We can separate our routes into 2 part:
// for Authentication and for Authorization (accessing protected resources)
// Authentication: POST /api/auth/signup POST /api/auth/signin 

const { verifySignUp } = require('../middelware');
const controller = require('../controllers/auth.controller');

module.exports = function(app) {
    app.use(function(req, res, next){
        res.header(
            'Access-Control-Allow-Headers',
            'x-acces-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        '/api/auth/signup',
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRoleExisted
        ],
        controller.signup
    );

    app.post('/api/auth/signin', controller.signin);
}