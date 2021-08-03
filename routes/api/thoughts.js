const express = require('express');
const router = express.Router();
const thoughtsCtrl = require('../../controllers/api/thoughts');


//POST a new thought record 
router.post('/submitThoughtRecord', thoughtsCtrl.create)



module.exports = router;