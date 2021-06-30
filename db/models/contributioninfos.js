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
      ContributionInfos.belongsTo(models.UserAccounts, {
        as: "UserAccounts",
        foreignKey: "user_id",
        targetKey: "user_id",
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
      group_id: DataTypes.STRING(255),
      user_id: DataTypes.STRING(255),
      material_name: DataTypes.STRING(50),
      category: DataTypes.INTEGER,
      composition_1: DataTypes.INTEGER,
      composition_ratio_1: DataTypes.INTEGER,
      composition_2: DataTypes.INTEGER,
      composition_ratio_2: DataTypes.INTEGER,
      composition_3: DataTypes.INTEGER,
      composition_ratio_3: DataTypes.INTEGER,
      fabric_structure: DataTypes.STRING(50),
      color: DataTypes.INTEGER,
      pattern: DataTypes.STRING(50),
      processing: DataTypes.STRING(50),
      unit_price: DataTypes.INTEGER,
      supplier: DataTypes.STRING(50),
      comment: DataTypes.STRING(200),
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
