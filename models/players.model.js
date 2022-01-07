const { Schema, model } = require('mongoose')

const modelSchema = new Schema({
    name: String,
    team: String,
    position: String,
    nation: String
})

const Player = model('Player', modelSchema)

module.exports = Player