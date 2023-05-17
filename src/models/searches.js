const mongoose = require("mongoose");

const searchSchema = mongoose.Schema({
    search : {
        type:String,
        required:true
    }
})

const Search = new mongoose.model("Search", searchSchema);

module.exports = Search;