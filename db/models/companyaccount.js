const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CompanyAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyAccount.init(
    {
      company_id: DataTypes.STRING,
      company_pass: DataTypes.STRING,
      company_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CompanyAccount",
      underscored: true,
    }
  );
  return CompanyAccount;
};
