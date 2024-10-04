'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ict extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ict.init({
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    site: DataTypes.STRING,
    foto_perfil: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Ict',
  });
  return Ict;
};