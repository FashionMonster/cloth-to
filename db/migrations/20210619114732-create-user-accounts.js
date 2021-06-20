module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_accounts", {
      user_id: {
        primaryKey: true,
        type: Sequelize.STRING(255),
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      group_id: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("user_accounts");
  },
};
