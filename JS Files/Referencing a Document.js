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
        authorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Author'
        },
        name:String
});

const Course=mongoose.model('Course',courseSchema);

async function createCourse(name,authorId) {
    const course=new Course({name:name,authorId:authorId});
    const result=await course.save();
    console.log(result);
}

async function createAuthor(name,bio,website){
    const author=new Author({
        name:name,
        bio:bio,
        website:website
    });
    const result = await author.save();
    console.log(result);
}

async function listCourses(){
    const result=await Course.find().
                            populate('authorId','name').
                            select('authorId');
    console.log(result);
}

//createAuthor('Hamad','independet person', 'github.com/hamadmuhammad758');
//createCourse("Node with Mongo", "60f59ca351f0380f2c4336b1");
listCourses();
