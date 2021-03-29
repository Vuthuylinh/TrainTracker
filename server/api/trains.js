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




// matches POST requests to /api/trains/
router.post('/', function (req, res, next) { /* etc */});

module.exports = router;
