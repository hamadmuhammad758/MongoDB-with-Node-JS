const { Console } = require('console');
const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost//NodeMongoDb")
        .then(()=> console.log('Connected with NodeMongoDb'))
        .catch(()=> console.log('Connection failed with NodeMongoDb'));

const Course = mongoose.model("Course",courseSchema);