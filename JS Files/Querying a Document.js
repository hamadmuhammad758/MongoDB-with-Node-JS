const Course=require('./Create New DB & add Collection then Document');

// const mongoose=require('mongoose');


// mongoose.connect("mongodb://localhost/NodeMongoDb")
//         .then(()=> console.log('Connected with NodeMongoDb'))
//         .catch(()=> console.log('Connection failed with NodeMongoDb'));

async function getCourses(){
        const result=await Course.find();
        console.log("Inside get Courses : "+result);
}
getCourses();
