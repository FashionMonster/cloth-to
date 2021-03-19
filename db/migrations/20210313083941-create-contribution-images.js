module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contribution_images", {
      contribution_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image_url_1: {
        type: Sequelize.STRING,
      },
      image_url_2: {
        type: Sequelize.STRING,
      },
      image_url_3: {
        type: Sequelize.STRING,
      },
      image_url_4: {
        type: Sequelize.STRING,
      },
      image_url_5: {
        type: Sequelize.STRING,
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
