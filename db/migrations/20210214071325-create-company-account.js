module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("company_accounts", {
      company_id: {
        primaryKey: true,
        type: Sequelize.STRING,
      },
      company_pass: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      company_name: {
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
    await queryInterface.dropTable("company_accounts");
  },
};
