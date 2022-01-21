const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
    },
    airport: {
        type: String,
        required:true,
        default:"DEN"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required:true,
    },
    departs: {
        type:Date,
        default: function () {
        return Date.now() + 365*24*60*60000
     }
    }
   
});
module.exports = mongoose.model('Flight',flightSchema);