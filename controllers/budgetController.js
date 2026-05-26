const Budget = require("../models/Budget.js")

exports.setBudget = async (req, res) => {
    const userId = req.user.id
    const { category, amount, month, year } = req.body

    try {
        const budget = await Budget.findOneAndUpdate(
            { userId, category, month, year },
            { amount },
            { upsert: true, new: true }
        )
        res.status(200).json(budget)
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
}

exports.getBudgets = async (req, res) => {
    const userId = req.user.id
    const { month, year } = req.query

    try {
        const budgets = await Budget.find({ userId, month, year })
        res.status(200).json(budgets)
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
}