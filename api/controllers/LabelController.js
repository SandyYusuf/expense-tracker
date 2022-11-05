const {label, transaction} = require ("../models");

class LabelController {
  static async getLabels(req, res) {
   try{
    const labels = await label.findAll({
      order: [["id", "ASC"]],
    });
    res.json(labels);
   }catch (err){
    res.json(err);
   }
  }

  static async add(req, res) {
    // untuk menambahkan data
    try {
      const {type, color } = req.body;
      const result = await label.create({
        type, color,
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

      const result = await label.destroy({
        where: { id },
      });
      if (result) {
        res.json({
          message: "label detail has been removed.",
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
      const { type, color } = req.body;

      const result = await label.update(
        {
          type, color,
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
      const result = await label.findByPk(id);

      if (result) {
        res.json(result);
      } else {
        res.json({
          message: `Author id ${id} not found.`,
        });
      }
    } catch (err) {
      res.json(err);
    }
  }

  static async listTransactions(req, res) {
    // untuk mengambil buku dari id
    try {
      const labelId = +req.params.id;

      const transactions = await transaction.findAll({
        where: {
          labelId,
        },
      });
      if (transactions.length > 0) {
        res.json({
          data: {
            transactions,
            totalTransactions: transactions.length,
          },
        });
      } else {
        res.json({
          message: "No Transaction yet.",
        });
      }
    } catch (err) {
      res.json(err);
    }
  }

  
}

module.exports = LabelController;
