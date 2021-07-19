
# How to establish relationship between related documents

## 3 Approaches

1. Using references also called as normalization (Like Relational Databases) 

***Improved data consistency***

``` 
    let author={
        name:'mosh'
    }
    let course={
        author_id=author_id
        name:"Course Name"
    }
```

2. Using Embedded Documnet 

***Higest Query Performance***
```
    let course={
        author:{
            name:'mosh'
        },
        name:'Course Name'
    }
```
3. Hybrid Approach

***Use Extra space but a good compromise between consistency and performance***

    let author={
        name:'mosh'
        **//Many Other properties**
    }

    embedd most common properties of author in course object and maintain seperate for specifc requirement

    let course={
        author:{
            id=author_id,
            name:'mosh'
        },
        name:'Course Name'
    }

All of 3 appraoches have their own pros and cons. 
Their is a tradeoff between query performance and data consistency and redundant data, see what suits you best.


Now, Let's Look at some code and stuff

1. Connect with db

```
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));
```

2. Create an author schema
```
const authorSchema = new mongoose.Schema({
        name:String,
        bio:String,
        website:String
});
```
3. Compile author schema to model

```
const Author=mongoose.model('Author',authorSchema);
```

4. Now to create a reference set type of author to objectid and create a ref to author collection

**Note: Creating a reference will only help in data population, and will not enforce any kind of data consistency**

const courseSchema = new mongoose.Schema({
        authorId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Author'
        },
        name:String
});

5. Compile course schema to course Model

```
const Course=mongoose.model('Course',courseSchema);
```

6. Create an author document 

```
async function createAuthor(name,bio,website){
    const author=new Author({
        name:name,
        bio:bio,
        website:website
    });
    const result = await author.save();
    console.log(result);
}
```
7. Now goto mongodb compass and pick the generated author id manually and pass to create course, in this way a new course with author id would be created.

```
async function createCourse(name,authorId) {
    const course=new Course({name:name,authorId:authorId});
    const result=await course.save();
    console.log(result);
}
```
8.  Let's look at newly created course by using listCourses() method

```
async function listCourses(){
    const result=await Course.find().
                            populate('authorId','name'). ***//quereis the author collection using author id and populate the output with result and only name property of author would be returned***
                            select('authorId'); ***//displays only author id from course model***
    console.log(result);
}
```
9. Uncomment  the following and call in sequential order
```
//createAuthor('Hamad','independet person', 'github.com/hamadmuhammad758');
//createCourse("Node with Mongo", "60f59ca351f0380f2c4336b1");
//listCourses();
```



> Congratulations ! if every thing is working file , else retry or contact me.

**#<<<<<<<<<<<<<<(((((((( Mongo db Guides by Master Spark ))))))))>>>>>>>>>>>>>>**
