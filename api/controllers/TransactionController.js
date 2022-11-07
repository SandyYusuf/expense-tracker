const {transaction} = require ("../models");

class TransactionController {
  static async getTransactions(req, res) {
   try{
    const transactions = await transaction.findAll({
      order: [["id", "ASC"]],
    });
    res.json(transactions);
   }catch (err){
    res.json(err);
   }
  }

  static async add(req, res) {
    // untuk menambahkan data
    try {
      const {date, detail, categories, amount } = req.body;
      const result = await transaction.create({
        date, detail, categories, amount,
      });

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async remove(req, res) {
    // untuk menghapus data
    try {
      const id = +req.params.id;

      const result = await transaction.destroy({
        where: { id },
      });
      if (result) {
        res.json({
          message: "transaction detail has been removed.",
        });
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async edit(req, res) {
    // untuk mengubah data
    try {
      const id = +req.params.id;
      const { date, detail, categories, amount } = req.body;

      const result = await transaction.update(
        {
          date, detail, categories, amount,
        },
        {
          where: { id },
        }
      );

      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }

  static async detail(req, res) {
    // untuk mengambil detail dari id data
    try {
      const id = +req.params.id;
      const result = await transaction.findByPk(id);

      if (result) {
        res.json(result);
      } else {
        res.json({
          message: `transaction id ${id} not found.`,
        });
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async getSum(req,res){
      try{
        const Amounts = Number(req.params.amount)
  
        const transactions=await transaction.sum('amount')
        res.json(transactions)
      }catch(err){
        res.json(err)
      }
    }

   

  
}

module.exports = TransactionController;
