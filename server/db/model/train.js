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
    defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ApvM0hHJoeYOOm67bA_yZbbKGxW8moAn7w&usqp=CAU"
  },
  arrivalTime1:{
    type:Sequelize.STRING
  },
  arrivalTime2:{
    type:Sequelize.STRING
  }
})

module.exports = Train
