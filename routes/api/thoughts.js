const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../../controllers/api/thoughts');


//POST a new thought record 
router.post('/submitThoughtRecord', thoughtsCtrl.create)

//SHOW one thought record
router.get('/thoughts/:id/', thoughtsCtrl.show)

//SHOW ALL THOUGHTS
router.get('/thoughts', thoughtsCtrl.index)


module.exports = router;