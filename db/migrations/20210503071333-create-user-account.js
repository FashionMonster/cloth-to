module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_accounts", {
      user_id: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      user_pass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      group_id: {
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
    await queryInterface.dropTable("user_accounts");
  },
};
