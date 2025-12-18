const Expense = require('../models/Expense');

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;

    if(!title || !amount || !category) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const expense = await Expense.create({
      title,
      amount,
      category,
      date: date || Date.now()
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if(!expense) {
            return res.status(404).json({ message: 'Expense not found'});
        }
        await expense.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getExpenses, addExpense, deleteExpense };