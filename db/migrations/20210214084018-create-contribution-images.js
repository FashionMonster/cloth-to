module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contribution_images", {
      contribution_id: {
        references: {
          model: "contribution_infos",
          key: "contribution_id",
        },
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      images_1: {
        allowNull: false,
        type: Sequelize.BLOB,
      },
      images_2: {
        type: Sequelize.BLOB,
      },
      images_3: {
        type: Sequelize.BLOB,
      },
      images_4: {
        type: Sequelize.BLOB,
      },
      images_5: {
        type: Sequelize.BLOB,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("contribution_images");
  },
};
