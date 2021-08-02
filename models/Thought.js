const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtRecordSchema = new Schema ({

    entryName: {type: String, required: true},
    emoji: {type: String, required: true},
    situation: {type: String, required: true},
    emotion: {type: String, required: true},
    automaticThoughts: {type: String, required: true},
    evidenceSupport: {type: String, required: true},
    evidenceAgainst: {type: String, required: true},
    balanceThought: {type: String, required: true},
    feelNow: {type: String, required: true}, 


});

module.exports = mongoose.model("ThoughtRecord", thoughtRecordSchema);

