const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
        name: { type: String, required: true},
        manufacturer: { type: String, required: true},
        description: { type: String, required: true},
        color: { type: String, required: true},
        price: { type: Number, required: true},
        imageFileUrl: { type: String },
        screen: { type: String, required: true},
        processor: { type: String, required: true},
        ram:{ type: Number, required: true},
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
  });
  
const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;