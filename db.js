const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL)
.then( () => {
        console.log("Database connected successfully");
    }
)
.catch((err)=>{
    console.log("Error occured in connection");
    console.error(err);
    process.exit(1);
})
module.exports = mongoose;