const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a text value'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: ['Food', 'Transport', 'Entertainment', 'Bills', 'Other'], 
  },
  date: {
    type: Date,
    default: Date.now,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Expense', expenseSchema);