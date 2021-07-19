*The explainations in this file are in comparison to relational databases*

# Collections 
Collections are like a table in database

# Schema 
Schema is like the blue print / Structure of data for specific collection/ Model can accept

# Document
Document is an instance or single row (Like in relational db) of a collection


## WorkFlow

##  1- We will create a database, I have added "NodeMongoDb" (a new db name) in mongoose.connect it will automatically create a new db with this name 

```
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with playground db"))
        .catch(()=>console.log("Unable to connect with playground db"));
```

## 2- The a Schema would be designed which will explain the kind of data a specific collection could accept

```
const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type:Date, default:Date.now},
        isPublished: Boolean
})
```

## 3- Now A collection would be created using the structure designed in schema 

So Create the course Collection / Model by passing the designed Schema as second argument and collection name as first argument
```
const Course = mongoose.Model("Course",courseSchema);
```
##  4- Now let's create a single document / instance of collection
1. Create course document using new keyword
2. Provide custom values to every data member as JSON object  
3. Pass JSON object inside constructor of this instance.
```
const course=new Course({
        name:"MongoDB with NodeJS",
        author:" Hamad ",
        tags: ["mongo","node"],
        isPublished:false
});
```

## 5- Save the document

1. Save the document in db and await as it is a Asynchronous operation and returns a promise object
2. Promised could be resolved (on successs) or could be rejected (on failure) based on save status.
3. Saved object would be returned as a result of resolved promise
```
const result = await course.save();
```
## 5- Display saved object
A unique identifier would be appended to this course object as a default behaviour of mongo db 

```
console.log(result)
```

## Before Running this project move all code related to creation of course instance to async function Like below and the call this function 

```
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
        console.log(result)
};


createCourse();
```

## Output

```
Connected Succesfully with playground db
{
  tags: [ 'mongo', 'node' ],
  _id: 60f2a7d951efab27fc0b72a4,
  name: 'MongoDB with NodeJS',
  author: ' Hamad ',
  isPublished: false,
  date: 2021-07-17T09:50:17.233Z,
  __v: 0
}

```

### Open Mongodb Compass and explore newly created database

> Congratulations ! if every thing is working file , else retry or contact me.

**#<<<<<<<<<<<<<<(((((((( Mongo db Guides by Master Spark ))))))))>>>>>>>>>>>>>>**

> Follow me at: 

**#<<<<<<<<<<<<<<(((((((( https://github.com/hamadmuhammad758 ))))))))>>>>>>>>>>>>>>**
**#<<<<<<<<<<<<<<(((((((( https://www.youtube.com/c/masterspark-hamad ))))))))>>>>>>>>>>>>>>**
