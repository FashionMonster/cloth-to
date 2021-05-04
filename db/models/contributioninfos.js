const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContributionInfos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ContributionInfos.belongsTo(models.ContributionImages, {
        foreignKey: "contribution_id",
        targetKey: "contribution_id",
      });
    }
  }
  ContributionInfos.init(
    {
      contribution_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      group_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      material_name: DataTypes.STRING,
      category: DataTypes.INTEGER,
      composition_1: DataTypes.INTEGER,
      composition_ratio_1: DataTypes.INTEGER,
      composition_2: DataTypes.INTEGER,
      composition_ratio_2: DataTypes.INTEGER,
      composition_3: DataTypes.INTEGER,
      composition_ratio_3: DataTypes.INTEGER,
      fabric_structure: DataTypes.STRING,
      color: DataTypes.INTEGER,
      pattern: DataTypes.STRING,
      processing: DataTypes.STRING,
      unit_price: DataTypes.INTEGER,
      supplier: DataTypes.STRING,
      comment: DataTypes.STRING,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ContributionInfos",
      underscored: true,
    }
  );
  return ContributionInfos;
};
