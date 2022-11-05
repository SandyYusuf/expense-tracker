const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.get("/", TransactionController.getTransactions);
transactionRoute.post("/add", TransactionController.add);
transactionRoute.delete("/remove/:id", TransactionController.remove);
transactionRoute.put("/edit/:id", TransactionController.edit);
// incomeRoute.get("/detail/:id", TransactionController.detail);


module.exports = transactionRoute;