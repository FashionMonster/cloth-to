const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContributionInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContributionInfo.init(
    {
      contribution_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      company_id: DataTypes.STRING,
      user_id: DataTypes.STRING,
      material_name: DataTypes.STRING,
      category: DataTypes.INTEGER,
      fabric_structure: DataTypes.STRING,
      color: DataTypes.INTEGER,
      pattern: DataTypes.STRING,
      unit_price: DataTypes.STRING,
      supplier: DataTypes.STRING,
      comment: DataTypes.STRING,
      is_del: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ContributionInfo",
      underscored: true,
    }
  );
  return ContributionInfo;
};
