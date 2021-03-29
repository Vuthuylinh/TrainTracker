const { green, red } = require('chalk');
const { db,Train} = require('./server/db');

const seed = async () =>{
  try{
    await db.sync({force:true});
    const trains =[
      {
        name:"TOMO",
        imageUrl: "https://image.shutterstock.com/image-vector/train-260nw-104147417.jpg",
        arrivalTime1:"9:30AM",
        arrivalTime2: new Date(2021,2,30,11,30)
      }
    ]
    const trainList = await Promise.all(trains.map(train => {
      return Train.create(train)
    }));
  } catch (err) {
    console.log(red(err));
  }
}

if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
module.exports = seed;
