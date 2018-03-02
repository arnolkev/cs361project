const assert = require('assert');
const auth = require('../utilities/auth');
const mongo = require('../utilities/mongo');

// This is required to limit access to various endpoints - not currently in use
const checkScopes = auth.jwtAuthz(['']);

// Returns information from client side authenticated user
module.exports = function(app) {
    app.get('/api/user', auth.checkJwt, function (req, res) {

        context = {};

        // Connect to the client
        mongo.MongoClient.connect(mongo.uri, function (err, client) {
            // Assert that no errors occurred
            assert.equal(null, err);
            // Get database variable
            const db = client.db(mongo.dbName);

            // Get the portfolio
            auth.getUserByAuthId(db, req.user.sub, function (result) {
                res.send(result);

                client.close();
            });
        });
    });
}