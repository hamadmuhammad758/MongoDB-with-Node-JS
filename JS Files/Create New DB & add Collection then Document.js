const mongoose=require("mongoose");

// I have added "NodeMongoDb" (a new db name) in mongoose.connect it will automatically create a new db with this name

mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));

// See help file 2-Collections_Documents & Schemas in mongo.md

const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type:Date, default:Date.now},
        isPublished: Boolean
});

// Create the course Collection / Model by passing the designed Schema as second argument and collection name as first argument

const Course = mongoose.model("Course",courseSchema);

//Now let's create a single document / instance of collection

async function createCourse(){        
        const course=new Course({
                name:"MongoDB with NodeJS",
                author:" Hamad ",
                tags: ["mongo","node"],
                isPublished:false
        });

        // save the document

        const result = await course.save();

        // display result
        console.log("Inside Create Course: "+result);
};

//createCourse();

module.exports=Course;