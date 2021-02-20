const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContributionImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContributionImage.init(
    {
      contribution_id: DataTypes.INTEGER,
      images_1: DataTypes.BLOB,
      images_2: DataTypes.BLOB,
      images_3: DataTypes.BLOB,
      images_4: DataTypes.BLOB,
      images_5: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "ContributionImages",
      underscored: true,
    }
  );
  return ContributionImage;
};
