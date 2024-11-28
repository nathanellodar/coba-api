
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('', '', '', {
  host: '',
  dialect: 'mysql', // atau 'postgres', 'sqlite', dll.
});

const db = sequelize.define('userdata', {
  name_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_user: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = db