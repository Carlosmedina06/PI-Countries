const { DataTypes } = require('sequelize')

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'activity',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficult: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 24,
        },
      },
      season: {
        type: DataTypes.ENUM(['Summer', 'Winter', 'Autumn', 'Spring']),
        allowNull: false,
      },
    },
    { timestamps: false }
  )
}
