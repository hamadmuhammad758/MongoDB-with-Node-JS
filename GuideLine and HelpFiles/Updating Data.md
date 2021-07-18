# Updating data using Mongoose

1. Adding Mongoose

```
const mongoose=require("mongoose");
```
2. Connect with NodeMongoDb databse
```
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));
```
3. Creating Course Schema 

```
const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type:Date, default:Date.now},
        isPublished: Boolean
});
```

4. Compiling courseschema to Model 
```
const Course = mongoose.model("Course",courseSchema);
```

## Update Using Query First Approach 

First, find by id if course exist 
Second, if yes then update course 

*Creating async funtion to update data based on _id value provided by user using QueryFirstApproach*

```
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
```
### Call the following function to see effect
```
updateByQueryFirstApproach("60f3b8fb11b18a3bfcb26294");
```

## UpdateFirst Approch
The data is directly updated without confirming if related document exist in collection or not
*The Code is here below:*
```
async function updateByUpdateFirstApproach(id){
    const course=await Course.update({_id:id},{
        $set:{
            author:"hamza",
            isPublished:false
        }
    });
    console.log(course);
}
```
### Call the following function to see effect

```
updateByUpdateFirstApproach("60f3b8fb11b18a3bfcb26294");
```



> Congratulations ! if every thing is working file , else retry or contact me.

**#<<<<<<<<<<<<<<(((((((( Mongo db Guides by Master Spark ))))))))>>>>>>>>>>>>>>**
