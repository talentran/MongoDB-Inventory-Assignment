const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    inventory: Number,
    nextDelivery: Date,
    deliveryAmt: Number
});

module.exports = mongoose.model('Item', itemSchema);
