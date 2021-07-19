const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));

const authorSchema = new mongoose.Schema({
        name:String,
        bio:String,
        website:String
});

const Author=mongoose.model('Author',authorSchema);

const courseSchema = new mongoose.Schema({
        author:authorSchema,
        name:String
});

const Course=mongoose.model('Course',courseSchema);

async function createCourse(name,author) {
    const course=new Course({name:name,author:author});
    const result=await course.save();
    console.log(result);
}


async function listCourses(){
    const result=await Course.find();
    console.log(result);
}

createCourse("Node with Mongo", new Author({name:'Hamza',bio:'developer',website:'github.com'}));
listCourses();


