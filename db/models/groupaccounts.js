const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GroupAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupAccounts.init(
    {
      group_id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
      },
      group_pass: DataTypes.STRING(255),
      group_name: DataTypes.STRING(20),
    },
    {
      sequelize,
      modelName: "GroupAccounts",
      underscored: true,
    }
  );
  return GroupAccounts;
};
