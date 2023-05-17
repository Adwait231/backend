const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
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
    subject : {
        type:String,
        required:true
    },
    message : {
        type:Number,
        required:true
    }
})

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;