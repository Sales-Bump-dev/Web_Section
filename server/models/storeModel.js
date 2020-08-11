const mongoose = require("mongoose");
const Schema = mongoose.Schema;

storeSchema = new Schema({
    name : {type: String},
    product: [{type: Schema.Types.ObjectId, ref : "Product"}]  
})

//Export Model
module.exports = mongoose.model("Store", storeSchema);