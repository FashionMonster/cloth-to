module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("group_accounts", {
      group_id: {
        primaryKey: true,
        type: Sequelize.STRING(255),
      },
      group_pass: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      group_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable("group_accounts");
  },
};
