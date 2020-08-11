const mongoose = require("mongoose");
const Schema = mongoose.Schema;

productSchema = new Schema({
    name : {type: String},
    price: {type: String},
})

//Export Model
module.exports = mongoose.model("Product", productSchema);