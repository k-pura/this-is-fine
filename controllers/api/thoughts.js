const Thought = require('../../models/Thought');

module.exports = {
    create,
    index,
    showOne
}

async function showOne(req,res) {
  try {
    console.log('Im getting one thought')
    let oneThought = await Thought.findById(req.params.id)
    res.status(200).json(thoughts)
  } catch(err) {
    res.status(500).json(err)
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

