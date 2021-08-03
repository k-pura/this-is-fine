const Thought = require('../../models/Thought');

module.exports = {
    create,
    show,
    index,
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

//this is just show one for now!
async function show(req, res) {
    try {
        const thought = await Thought.findById(req.params.id);  
        console.log(thought) 
        res.status(200).json('okay.')
    } catch (err) {
        res.status(500).json(err);
    }     
}


//this will show the index of thoughts

async function index(req, res) {
    try {
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts) 
    } catch (err) {
        res.status(500).json(err);
    }
}