const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['starters', 'mains', 'desserts', 'drinks'], required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
