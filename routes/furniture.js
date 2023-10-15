const express = require('express');
const Furniture = require('../models/furniture');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const furnitures = await Furniture.find();
        res.render('index', { furnitures });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
