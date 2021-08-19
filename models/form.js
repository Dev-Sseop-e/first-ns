'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Form extends Model {
    static associate(models) {
      Form.belongsTo(models.User)
    }
  };
  Form.init({
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Form',
  });
  return Form;
};