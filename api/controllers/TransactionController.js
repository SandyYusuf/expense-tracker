const {transaction} = require ("../models");

class TransactionController {
  static async getTransactions(req, res) {
   try{
    const transactions = await transaction.findAll();
    res.json(transactions);
   }catch (err){
    res.json(err);
   }
  }

  static async add(req, res) {
    // untuk menambahkan data
    try {
      const {information, moneyOut } = req.body;
      const result = await transaction.create({
        information,
        moneyOut,
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
      const { information,moneyOut } = req.body;

      const result = await transaction.update(
        {
          information,
          moneyOut,
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

  // static async detail(req, res) {
  //   // untuk mengambil detail dari id data
  //   try {
  //     const id = +req.params.id;
  //     const result = await transaction.findByPk(id);

  //     if (result) {
  //       res.json(result);
  //     } else {
  //       res.json({
  //         message: `transaction id ${id} not found.`,
  //       });
  //     }
  //   } catch (err) {
  //     res.json(err);
  //   }
  // }

  
}

module.exports = TransactionController;
