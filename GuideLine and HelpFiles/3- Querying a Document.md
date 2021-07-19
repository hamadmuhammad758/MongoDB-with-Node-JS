# This Document will help you reterive already saved documents in mongodb 

### We will extract a course by author id (Before that add more than one courses by following lec 2. or clone the existing document using mongodb compass and change the details)



1. Add the following line to 'Create New DB & add Collection then Document.js' so that other modules can use this course reference as well (New connection to db is not required as it is already created in 'Create New DB & add Collection then Document.js' )

```
module.exports=Course;
```
2. Use require method to get reference of course object

```
const Course=require('./Create New DB & add Collection then Document');
```

3.  Get List of all courses using find method on reference of Course Model

```
async function getCourses(){
        const result=await Course.find();
        console.log("Inside get Courses : "+result);
}
getCourses();

```


> Congratulations ! if every thing is working file , else retry or contact me.

**#<<<<<<<<<<<<<<(((((((( Mongo db Guides by Master Spark ))))))))>>>>>>>>>>>>>>**

> Follow me at: 

**#<<<<<<<<<<<<<<(((((((( https://github.com/hamadmuhammad758 ))))))))>>>>>>>>>>>>>>**
**#<<<<<<<<<<<<<<(((((((( https://www.youtube.com/c/masterspark-hamad ))))))))>>>>>>>>>>>>>>**
