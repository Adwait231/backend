const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    tableType : {
        type:String,
        required:true
    },
    guestNumber : {
        type:Number,
        required:true
    },
    placement : {
        type:String,
        required:true
    },
    bookdate : {
        type:String,
        required:true
    },
    time : {
        type:String,
        required:true
    },
    note : {
        type:String,
        required:false
    }
})

const Booking = new mongoose.model("Booking", bookingSchema);

module.exports = Booking;