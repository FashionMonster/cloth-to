module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_accounts", {
      user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      user_pass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "company_accounts",
          key: "company_id",
        },
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
