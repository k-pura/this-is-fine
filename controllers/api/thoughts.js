const Thought = require('../../models/Thought');

module.exports = {
    create
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

