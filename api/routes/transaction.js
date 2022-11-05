const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.get("/", TransactionController.getTransactions);
transactionRoute.post("/add", TransactionController.add);
transactionRoute.delete("/remove/:id", TransactionController.remove);
transactionRoute.put("/edit/:id", TransactionController.edit);
transactionRoute.get("/detail/:id", TransactionController.detail);
transactionRoute.get("/sum", TransactionController.getSum);


module.exports = transactionRoute;