const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 5000;

const uri = 'mongodb://localhost:27017'; // URI для подключения к MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let toursCollection; // Коллекция туров

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database');
        const db = client.db('valeribaskayanc'); // Замените 'your-database-name' на имя вашей базы данных
        toursCollection = db.collection('tours'); // Используйте коллекцию 'tours'
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

connectToDatabase();

app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Что-то пошло не так!');
});

function validateTourData(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: "Отсутствует обязательное поле." });
    }
    next();
}

app.get('/api/tours', async (req, res) => {
    const tours = await toursCollection.find({}).toArray();
    res.json(tours);
});

// Остальные маршруты также должны обновиться для работы с MongoDB

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});