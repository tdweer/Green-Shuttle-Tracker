const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scheduleschema = new Schema({

    SchID :{
        type:Number,
        required : true
    },

    BusNo :{
        type:String
       
    },

    Drivername :{
        type:String,
        required : true
    },

    StartDate:{
        type:String
        
    },

    EndDate :{
        type:String,
        required : true
    },

    Drivername :{
        type:String,
        required : true
    },

    Days :{
        type:String,
        required : true
    },

    Depature :{
        type:String,
        
    },

    Arrival :{
        type:String,
        
    }

});

const schedule  = mongoose.model("schedule", scheduleschema);

module.exports = schedule;
