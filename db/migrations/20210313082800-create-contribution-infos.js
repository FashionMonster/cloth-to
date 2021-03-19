module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contribution_infos", {
      contribution_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        references: {
          model: "company_accounts",
          key: "company_id",
        },
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
      composition_1: {
        type: Sequelize.INTEGER,
      },
      composition_ratio_1: {
        type: Sequelize.INTEGER,
      },
      composition_2: {
        type: Sequelize.INTEGER,
      },
      composition_ratio_2: {
        type: Sequelize.INTEGER,
      },
      composition_3: {
        type: Sequelize.INTEGER,
      },
      composition_ratio_3: {
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
      processing: {
        type: Sequelize.STRING,
      },
      unit_price: {
        type: Sequelize.INTEGER,
      },
      supplier: {
        type: Sequelize.STRING,
      },
      comment: {
        type: Sequelize.STRING,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
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
