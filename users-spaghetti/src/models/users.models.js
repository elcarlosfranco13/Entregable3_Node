const {DataTypes} = require('sequelize')

const db = require('../utils/database')

//*{
  //*id: 1,
  //*first_name: 'string',
  //*last_name: 'string',
  //*email: 'string',
  //*password: 'string',
  //*birthday: 'YYYY/MM/DD'
//*}

const Users = db.define('users', {
  id: {
      type: DataTypes.INTEGER
  },
  first_name:{
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.STRING
  }
  
},{
  timestamps:false
})

module.exports = Users



