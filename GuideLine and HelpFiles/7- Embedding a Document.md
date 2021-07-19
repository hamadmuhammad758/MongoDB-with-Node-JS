# Embedding a Document inside another document

1. Connect With db

```
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));
```
2. Create Author schema and build model
```
const authorSchema = new mongoose.Schema({
        name:String,
        bio:String,
        website:String
});

const Author=mongoose.model('Author',authorSchema);
```
3. Create course Schema and set type of embedded author to authorschema, the build a course model

```
const courseSchema = new mongoose.Schema({
        author:authorSchema,
        name:String
});

const Course=mongoose.model('Course',courseSchema);
```
4. Build a course document using supplied name and Author model provided

```
async function createCourse(name,author) {
    const course=new Course({name:name,author:author});
    const result=await course.save();
    console.log(result);
}
```
5. Display courses to see affect

```
async function listCourses(){
    const result=await Course.find();
    console.log(result);
}
```

6. Create Course function is called and author model with data is provided

```
createCourse("Node with Mongo", new Author({name:'Hamza',bio:'developer',website:'github.com'}));
listCourses();
```



> Congratulations ! if every thing is working file , else retry or contact me.

**#<<<<<<<<<<<<<<(((((((( Mongo db Guides by Master Spark ))))))))>>>>>>>>>>>>>>**

> Follow me at: 

**#<<<<<<<<<<<<<<(((((((( https://github.com/hamadmuhammad758 ))))))))>>>>>>>>>>>>>>**

**#<<<<<<<<<<<<<<(((((((( https://www.youtube.com/c/masterspark-hamad ))))))))>>>>>>>>>>>>>>**
