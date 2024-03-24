const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Busschema = new Schema({

    BusID :{
        type:String,
        required : true
    },

    BusNumber :{
        type:String,
        required : true
    },

    Capcity :{
        type:Number,
        required : true
    }

});

const bus  = mongoose.model("bus", Busschema);

module.exports = bus;