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
    }
  }
  UserAccounts.init(
    {
      user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      user_pass: DataTypes.STRING,
      user_name: DataTypes.STRING,
      group_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserAccounts",
      underscored: true,
    }
  );
  return UserAccounts;
};
