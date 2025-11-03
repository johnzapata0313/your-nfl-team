//pulled from claude
// app/models/nflteam.js
var mongoose = require('mongoose');

var nflTeamSchema = mongoose.Schema({
    name: String,
    city: String,
    state: String,
    latitude: Number,
    longitude: Number,
    stadium: String,
    founded: Number,
    conference: String,
    division: String,
    colors: [String],
    superbowls: Number
});

module.exports = mongoose.model('NFLTeam', nflTeamSchema);