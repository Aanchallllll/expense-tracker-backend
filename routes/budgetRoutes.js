const express = require("express")
const { protect } = require("../middleware/authMiddleware.js")
const { setBudget, getBudgets } = require("../controllers/budgetController.js")

const router = express.Router()

router.post("/set", protect, setBudget)
router.get("/get", protect, getBudgets)

module.exports = router