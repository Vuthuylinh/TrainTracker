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
    defaultValue:"https://www.emoji.co.uk/files/apple-emojis/travel-places-ios/509-train.png"
  },
  arrivalTime1:{
    type:Sequelize.STRING
  },
  arrivalTime2:{
    type:Sequelize.STRING
  }
})

module.exports = Train
