const route = require ('express').Router();

route.get ("/", (req,res) => {
    res.json({
        message: "Expense Tracker Page",
    });
});

const labelRoutes = require ("./label");
const transactionRoutes =require ("./transaction");

route.use("/labels", labelRoutes);
route.use("/transactions", transactionRoutes);

module.exports = route;