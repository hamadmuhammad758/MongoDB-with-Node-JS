const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/playground")
        .then(()=> console.log("Connected Succesfully with playground db"))
        .catch(()=>console.log("Unable to connect with playground db"));