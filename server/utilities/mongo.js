// MongoDb connection information
var exports = module.exports = {};
exports.MongoClient = require('mongodb').MongoClient;
// MongoDB AWS cluster
exports.uri = "mongodb://admin:CS361Project@cluster0-shard-00-00-qq8tm.mongodb.net:27017,cluster0-shard-00-01-qq8tm.mongodb.net:27017,cluster0-shard-00-02-qq8tm.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
// Database to connect to
exports.dbName = "CS361Project";
// Collection in database to connec to
exports.userCollection = "users";