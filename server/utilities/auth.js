// Load assert middleware
const assert = require('assert');
const mongo = require('./mongo');
var exports = module.exports = {};

// Function that fetches a collection by user auth_id from MongoDB database
exports.getUserByAuthId = function (db, user, callback) {

    // Get the documents collection
    const collection = db.collection(mongo.userCollection);

    // See if data for the given user exists, if found return data
    collection.findOne({
        "auth_id": user
    }, function (err, result) {
        assert.equal(err, null);

        console.log("result");

        if (!result) {
            collection.insertOne(
                { "auth_id": user }
            )

            result = "Created profile for new user";
        }

        callback(result);
    });
}

// Load JWT middleware
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

exports.jwtAuthz = require('express-jwt-authz');

// Authentication middleware. When used, the
// access token must exist and be verified against
// the Auth0 JSON Web Key Set
// Code taken from example on Auth0 Website
exports.checkJwt = jwt({
    // Dynamically provide a signing key
    // based on the kid in the header and 
    // the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://cs-361-project.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'users',
    issuer: `https://cs-361-project.auth0.com/`,
    algorithms: ['RS256']
});