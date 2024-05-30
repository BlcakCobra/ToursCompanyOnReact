const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
        db = client.db("ReactTour");
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

connectToDatabase();

module.exports = { db };