const Thought = require('../../models/Thought');

module.exports = {
    create,
    index,
    showOne,
    deleteOne,
}

async function showOne(req,res) {
  try {
    console.log('Im getting one thought')
    let oneThought = await Thought.findById(req.params.id)
    res.status(200).json(oneThought)
  } catch(err) {  
    res.status(500).json(err)
    console.log(err)
  }
}

async function index(req,res) {
  try {
    console.log("i'm an index try")
    let thoughts = await Thought.find({})
    res.status(200).json(thoughts)
  } catch(err) {
    res.status(500).json(err)
  }
}

async function create(req, res) {
    try {
      console.log(req.body)
      await Thought.create(req.body)
      res.status(200).json('ok')
    } catch(err) {
      res.json(err);
    }
}

async function deleteOne(req, res) {
    try {
      let incomingId = req.params.id;
      console.log("HERE IS THE INCOMING ID FROM THE REQ PARAMS", incomingId)
      await Thought.findByIdAndRemove(incomingId)
      console.log("YALL WE DID THE DELETE WE GOOD")
      res.status(200).json('yes, deleted.')
    } catch (err) {
      res.status(500).json(err);
    }
} 

