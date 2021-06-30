const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserAccounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAccounts.hasMany(models.ContributionInfos, {
        foreignKey: "user_id",
        sourceKey: "user_id",
      });
    }
  }
  UserAccounts.init(
    {
      user_id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
      },
      user_name: DataTypes.STRING(20),
      group_id: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "UserAccounts",
      underscored: true,
    }
  );
  return UserAccounts;
};
