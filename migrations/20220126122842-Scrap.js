'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('scrapMedia', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      images: {
        type: DataTypes.STRING
      },
      brand: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      underscored: true
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('scrapMedia');
  }
};
