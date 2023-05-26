const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const service = new Schema(
    {
    EnglishName: String ,
    ArabicName : String ,
    price : Number ,
    urlPhoto : String

    }
);


const ser = mongoose.model("medical service ", service);

module.exports = ser;