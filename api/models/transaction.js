'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.label)
    }
  }
  transaction.init({
    date: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Date Cannot be Empty"
        }
      }
    },
    detail: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          message:"Input Your Transaction Detail"
        }
      }
    },
    amount: {
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          message:"Transaction Amount Cannot be Empty"
        }
      }
    },
    labelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};