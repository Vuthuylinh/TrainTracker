const Sequelize = require('sequelize')
const db = require('../db')

const Train = db.define('train',{
  name:{
    type:Sequelize.STRING,
    unique:true,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://image.shutterstock.com/image-vector/train-260nw-104147417.jpg"
  },
  arrivalTime1:{
    type:Sequelize.STRING
  },
  arrivalTime2:{
    type:Sequelize.DATE
  }
})

module.exports = Train
