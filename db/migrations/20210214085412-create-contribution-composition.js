module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contribution_compositions", {
      contribution_id: {
        references: {
          model: "contribution_infos",
          key: "contribution_id",
        },
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      composition_name_1: {
        type: Sequelize.STRING,
      },
      composition_percentage_1: {
        type: Sequelize.INTEGER,
      },
      composition_name_2: {
        type: Sequelize.STRING,
      },
      composition_percentage_2: {
        type: Sequelize.INTEGER,
      },
      composition_name_3: {
        type: Sequelize.STRING,
      },
      composition_percentage_3: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("contribution_compositions");
  },
};
