const route = require ('express').Router();

route.get ("/", (req,res) => {
    res.json({
        message: "Expense Tracker Page",
    });
});


const transactionRoutes = require ("./transaction");
route.use("/transactions", transactionRoutes);

module.exports = route;