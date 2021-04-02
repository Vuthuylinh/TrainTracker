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
        name:"NY01",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujBIw0S_pJCEe_TmLFm_BIMTi52mA5hIyKg&usqp=CAU",
        arrivalTime1:"10:00",
        arrivalTime2:"15:20"
      },
      {
        name:"DC01",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIkn-LHP1uaG3JUAsrSMzYBH78whsCCuOM_gF1OiPrfS0tRxQ1nwqfvmcjE94k2pcBSs&usqp=CAU",
        arrivalTime1:"09:30",
        arrivalTime2:"14:30"
      },
      {
        name:"CA01",
        imageUrl: "https://previews.123rf.com/images/nohaytitulo/nohaytitulo1704/nohaytitulo170400011/75407735-train-vector-flat-design-icon-part-of-travel-icons-set-eps10.jpg",
        arrivalTime1:"10:30",
        arrivalTime2:"14:30"
      },
      {
        name:"PA01",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzhXAaGkJUcA0jmwGkye8ErHMdgGWaT3Hbpg&usqp=CAU",
        arrivalTime1:"10:10",
        arrivalTime2:"17:30"
      },
      {
        name:"NJ01",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyufbPqJnyuXvBbiXUeIdiDaTZFxzT6N_gbSduI7EVmfuIL4W3TLzLzNNNYSaKhxbFCcI&usqp=CAU",
        arrivalTime1:"10:30",
        arrivalTime2:"17:30"
      },
      {
        name:"MA01",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoZRDAH4xmDT0qcslkerabzybHKTxzgqbxOEhk2cS28nyvt1a68GwOVNfIXaFDraha_k&usqp=CAU",
        arrivalTime1:"06:30",
        arrivalTime2:"11:30"
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
