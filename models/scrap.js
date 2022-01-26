module.exports = (sequelize, DataTypes) => {
  const scrapMedia = sequelize.define("scrapMedia", {
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
      type: DataTypes.DATE
    },
    updatedAt: {
      field: 'updated_at',
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  scrapMedia.associate = function(models) {
    // associations can be defined here

  };
  return scrapMedia;
};
