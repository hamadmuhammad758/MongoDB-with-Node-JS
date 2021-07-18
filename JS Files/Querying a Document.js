const Course=require('./Create New DB & add Collection then Document');

// const mongoose=require('mongoose');


// mongoose.connect("mongodb://localhost/NodeMongoDb")
//         .then(()=> console.log('Connected with NodeMongoDb'))
//         .catch(()=> console.log('Connection failed with NodeMongoDb'));

async function getCourses(){
        const result=await Course.
                        find()
                        .limit(2) // Number of records required
                        .sort({name:1}) // sort in ascending order w.r.t name
                        .select({author:"Hamad"}); // properties required by items


        console.log("Inside get Courses : "+result);
}
getCourses();
