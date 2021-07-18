// Adding Mongoose

const mongoose=require("mongoose");

// Connect with NodeMongoDb databse

mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));

//  Creating Course Schema 

const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type:Date, default:Date.now},
        isPublished: Boolean
});

// Compiling courseschema to Model 
const Course = mongoose.model("Course",courseSchema);

// creating async funtion to update data based on _id value provided by user using QueryFirstApproach

async function updateByQueryFirstApproach(id){
    const course=await Course.findById({_id:id})
    if(!course)
        console.log("No course found with published Status: "+id);
    else{
        // course.author="Ali"
        // course.isPublished=true;
        
        course.set({
            author:"Ali",
            isPublished:true
        });

        const result=await course.save();
        console.log(result);

    }
}

async function updateByUpdateFirstApproach(id){
    const course=await Course.update({_id:id},{
        $set:{
            author:"hamza",
            isPublished:false
        }
    });
    console.log(course);
}


//updateByQueryFirstApproach("60f3b8fb11b18a3bfcb26294");
updateByUpdateFirstApproach("60f3b8fb11b18a3bfcb26294");