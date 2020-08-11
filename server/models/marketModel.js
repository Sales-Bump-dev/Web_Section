const mongoose = require("mongoose");
const Schema = mongoose.Schema;

marketSchema = new Schema({
    name : {type: String},
    category: [{type: Schema.Types.ObjectId, ref : "Category"}]  
})

//Export Model
module.exports = mongoose.model("Market", marketSchema);