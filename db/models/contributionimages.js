const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContributionImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContributionImages.init(
    {
      contribution_id: { type: DataTypes.INTEGER, primaryKey: true },
      image_url_1: DataTypes.STRING,
      image_url_2: DataTypes.STRING,
      image_url_3: DataTypes.STRING,
      image_url_4: DataTypes.STRING,
      image_url_5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ContributionImages",
      underscored: true,
    }
  );
  return ContributionImages;
};
