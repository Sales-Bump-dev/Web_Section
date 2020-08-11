const mongoose = require("mongoose");
const Schema = mongoose.Schema;

categorySchema = new Schema({
    name : {type: String},
    store: [{type: Schema.Types.ObjectId, ref : "Store"}] 
})

//Export Model
module.exports = mongoose.model("Category", categorySchema);