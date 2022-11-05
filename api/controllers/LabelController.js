const {label} = require ("../models");

class IncomeController {
  static async getLabels(req, res) {
   try{
    const labels = await label.findAll();
    res.json(labels);
   }catch (err){
    res.json(err);
   }
  }

  static async add(req, res) {
    // untuk menambahkan data
    try {
      const {information, moneyIn } = req.body;
      const result = await label.create({
        information,
        moneyIn,
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
      const { information, moneyIn } = req.body;

      const result = await label.update(
        {
          information,
          moneyIn,
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
  //     const result = await label.findByPk(id);

  //     if (result) {
  //       res.json(result);
  //     } else {
  //       res.json({
  //         message: `Author id ${id} not found.`,
  //       });
  //     }
  //   } catch (err) {
  //     res.json(err);
  //   }
  // }

  
}

module.exports = IncomeController;
