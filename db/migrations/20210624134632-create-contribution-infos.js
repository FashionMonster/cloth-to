module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contribution_infos", {
      contribution_id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      group_id: {
        references: {
          model: "group_accounts",
          key: "group_id",
        },
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      user_id: {
        references: {
          model: "user_accounts",
          key: "user_id",
        },
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      material_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      category: {
        allowNull: false,
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
        type: Sequelize.STRING(50),
      },
      color: {
        type: Sequelize.INTEGER,
      },
      pattern: {
        type: Sequelize.STRING(50),
      },
      processing: {
        type: Sequelize.STRING(50),
      },
      unit_price: {
        type: Sequelize.INTEGER,
      },
      supplier: {
        type: Sequelize.STRING(50),
      },
      comment: {
        type: Sequelize.STRING(200),
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
