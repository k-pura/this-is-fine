const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../../controllers/api/thoughts');


//POST a new thought record 
router.post('/submitThoughtRecord', thoughtsCtrl.create)

//SHOW all thoughts
router.get('/thoughts', thoughtsCtrl.index)

//Show one thought
router.get('/thoughts/:id', thoughtsCtrl.showOne)

//Delete one thought
router.delete('/thoughts/:id', thoughtsCtrl.deleteOne)



module.exports = router;