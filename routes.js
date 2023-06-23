const express = require('express');
const router = express.Router();
const Item = require('./models/Item');

// Route to get all items
router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to post a new item
router.post('/items', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        inventory: req.body.inventory,
        nextDelivery: req.body.nextDelivery,
        deliveryAmt: req.body.deliveryAmt
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
