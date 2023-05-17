const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/UserRegister").then(() => {
    console.log(`Connection Successful `);
}).catch((e) => {
    console.log(`No connection`);
})