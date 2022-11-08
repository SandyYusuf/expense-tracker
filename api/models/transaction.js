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
    }
  }
  transaction.init({
    date: {
      type :DataTypes.STRING,
      validate: {
        notEmpty:{
          message: "Date can not be empty."
        }
      }
    },
    detail: {
      type :DataTypes.STRING,
      validate: {
        notEmpty:{
          message: "Detail can not be empty."
        }
      }
    },
    categories: {
      type :DataTypes.STRING,
      validate: {
        notEmpty:{
          message: "Transaction type can not be empty."
        }
      }
    },
    amount: {
      type :DataTypes.INTEGER,
      validate: {
        notEmpty:{
          message: "Amounts can not be empty."
        }
      }
    }
    
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};