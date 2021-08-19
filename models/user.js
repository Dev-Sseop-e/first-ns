'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // users -> forms
      User.hasMany(models.Form)
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};