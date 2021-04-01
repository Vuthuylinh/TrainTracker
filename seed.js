const { green, red } = require('chalk');
const { db,Train} = require('./server/db');

const seed = async () =>{
  try{
    await db.sync({force:true});
    const trains =[
      {
        name:"TOMO",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOrX0EOv1o8K51pn__7cYzXuuhuJ4m7La6g&usqp=CAU",
        arrivalTime1:"09:30",
        arrivalTime2:"10:30"
      },
      {
        name:"LINH",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDwPjNji82Wy77xiRfjuoU1FPl1ClW80_1OU4xo4n86CN8snGbi1U9osAbPcw-KJhe1Y&usqp=CAU",
        arrivalTime1:"08:15",
        arrivalTime2:"11:15"
      },
      {
        name:"No1",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujBIw0S_pJCEe_TmLFm_BIMTi52mA5hIyKg&usqp=CAU",
        arrivalTime1:"10:00",
        arrivalTime2:"15:20"
      },
      {
        name:"East",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIkn-LHP1uaG3JUAsrSMzYBH78whsCCuOM_gF1OiPrfS0tRxQ1nwqfvmcjE94k2pcBSs&usqp=CAU",
        arrivalTime1:"09:30",
        arrivalTime2:"14:30"
      },


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
