const labelRoute = require("express").Router();
const LabelController = require("../controllers/LabelController");

labelRoute.get("/", LabelController.getLabels);
labelRoute.post("/add", LabelController.add);
labelRoute.delete("/remove/:id", LabelController.remove);
labelRoute.put("/edit/:id", LabelController.edit);
labelRoute.get("/detail/:id", LabelController.detail);
labelRoute.get("/detail/:id/listtransactions", LabelController.listTransactions);


module.exports = labelRoute;