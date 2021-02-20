'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContributionComposition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ContributionComposition.init({
    contribution_id: DataTypes.INTEGER,
    composition_name_1: DataTypes.STRING,
    composition_percentage_1: DataTypes.INTEGER,
    composition_name_2: DataTypes.STRING,
    composition_percentage_2: DataTypes.INTEGER,
    composition_name_3: DataTypes.STRING,
    composition_percentage_3: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ContributionComposition',
    underscored: true,
  });
  return ContributionComposition;
};