const express = require('express');
const { db } = require('./db');

const router = express.Router();

router.get('/tours', async (req, res) => {
    try {
        const tours = await db.collection('tours').find({}).toArray();
        res.json(tours);
    } catch (error) {
        console.error('Error fetching tours:', error);
        res.status(500).json({ message: 'Что-то пошло не так!' });
    }
});

module.exports = router;