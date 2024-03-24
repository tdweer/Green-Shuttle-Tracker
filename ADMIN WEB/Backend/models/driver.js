const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const driverschema = new Schema({

    DriverName :{
        type:String,
        required : true
    },

    DriverID :{
        type:Number,
        required : true
    },

    DriverNIC :{
        type:Number,
        required : true
    },

    DriverTel :{
        type:Number,
        required : true
    }

});

const driver  = mongoose.model("driver", driverschema);

module.exports = driver;
