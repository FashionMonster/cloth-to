module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contribution_infos", {
      contribution_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        references: {
          model: "user_accounts",
          key: "user_id",
        },
        allowNull: false,
        type: Sequelize.STRING,
      },
      material_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.INTEGER,
      },
      fabric_structure: {
        type: Sequelize.STRING,
      },
      color: {
        type: Sequelize.INTEGER,
      },
      pattern: {
        type: Sequelize.STRING,
      },
      unit_price: {
        type: Sequelize.STRING,
      },
      supplier: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
      is_del: {
        defaultValue: 0,
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
    await queryInterface.dropTable("contribution_infos");
  },
};
