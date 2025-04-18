'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Interesse, { foreignKey: 'usuario_id' });
      Usuario.hasMany(models.Responsavel, { foreignKey: 'usuario_id' });
      Usuario.hasMany(models.Projeto, { foreignKey: 'usuario_id' });
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    endereco: DataTypes.STRING,
    telefone: DataTypes.STRING,
    tipo: DataTypes.STRING,
    primeiro_acesso: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios'
  });
  return Usuario;
};