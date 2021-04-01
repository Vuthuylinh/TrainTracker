const router = require('express').Router()
const Train = require('../db/model/train')


router.get('/', async (req, res, next)=> {
  try{
    const trains = await Train.findAll()
    res.json(trains)
  }catch(error){
    next(error)
  }
});

router.post('/', async (req, res, next)=>{
try {
  const train = await Train.create(req.body)
  res.json(train)
} catch (error) {
next(error)
}
});

router.delete('/:trainId', async (req, res, next) => {
  try {
    await Train.destroy({
      where: {
        id: req.params.trainId
      }
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})



module.exports = router;
