*File is independent of other files*

1. Add mongoose Module and connect to NodeMongoDb
```
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));
```

2. Create a simple product schema

```
const productSchema = new mongoose.Schema({
        name: String,
        price:Number
});
```
3. Build a Model using productSchema
```
const Product = mongoose.model("Product",productSchema);
```
4. Now an async function has been created to add multiple items to product's collection

async function createProducts(array){
        for (let index = 0; index < array.length; index++) {
                const element = array[index];
                const product=new Product(
                        {
                        name:element.name,
                        price:element.price
                        }); 
                 // save the document

                const result = await product.save();  
        }

        // display result
        console.log("Inside Create Product: "+result);
};


5. Create an array of JSON objects that resembled product schema


```
let a= [
    {name:"rice",price:20},
    {name:"shampoo",price:30},
    {name:"Lotion",price:40},
    {name:"Perfume",price:50},
    {name:"Polish",price:60}]
```


6. Call Function createProducts to and pass the array.

```
createProducts(a);
```

### Output: 
A product collection would be created and multiple products documents would be added to the respective Collection


# Now Let's reterive the documents on basis of some filters

Below are some comparison filters that we will use in our project
```
eq (equal to)
ne (Not equal to)
gt (greater then)
lt (less then)
gte (Greater than equal to )
lte (Less then equal to)
in (present in provided data ?)
nin (not present in provided data ?)
```
## Below is the function in which we reterived the products based on different filter and by using their combination also
```
async function getProducts(){
        var result=await Product.
                        find()
                        .limit(2) // Number of records required
                        .sort({name:1}) // sort in ascending order w.r.t name
                        .select({author:"Hamad"}); // properties required by items

        console.log(" \n\nGet all records, then sort ascendingly on name, pick top 2 elements, and display whose author is hamad\n\n "+result);

        result=await Product.
        find({price:{$lt:70,$gt:30}}); // price less than 70 and greator than 30
        console.log(" \n\nprice less than 70 and greator than 30 \n\n"+result);

        result=await Product.
        find({price:{$ne:30}}); // whose price is not equal to 30
        console.log(" \n\nwhose price is not equal to 30 \n\n"+result);

        result=await Product.
        find({price:{$in:[40,30]}}); // whose price is 40 or 30
        console.log("\n\n whose price is 40 or 30 \n\n"+result);

        result=await Product.
        find({price:{$nin:[40,30]},name:"rice"}); // price is neither 40 nor 30 and name is rice 
        console.log("\n\n price is neither 40 nor 30 and name is rice \n\n "+result);

}

```

### Output

```
Get all records, then sort ascendingly on name, pick top 2 elements, and display whose author is hamad

 { _id: 60f3cd178e61cf0fc8e291c6, author: 'Hamad' },{ _id: 60f3cd178e61cf0fc8e291c8, author: 'Hamad' }


price less than 70 and greator than 30

{ _id: 60f3cd178e61cf0fc8e291c6, name: 'Lotion', price: 40, __v: 0 },{ _id: 60f3cd178e61cf0fc8e291c8, name: 'Perfume', price: 50, __v: 0 },{ _id: 60f3cd178e61cf0fc8e291ca, name: 'Polish', price: 60, __v: 0 }


whose price is not equal to 30

{ _id: 60f3cd168e61cf0fc8e291c1, name: 'rice', price: 20, __v: 0 },{ _id: 60f3cd178e61cf0fc8e291c6, name: 'Lotion', price: 40, __v: 0 },{ _id: 60f3cd178e61cf0fc8e291c8, name: 'Perfume', price: 50, __v: 0 },{ _id: 60f3cd178e61cf0fc8e291ca, name: 'Polish', price: 60, __v: 0 }


 whose price is 40 or 30

{ _id: 60f3cd178e61cf0fc8e291c4, name: 'shampoo', price: 30, __v: 0 },{ _id: 60f3cd178e61cf0fc8e291c6, name: 'Lotion', price: 40, __v: 0 }


 price is neither 40 nor 30 and name is rice

 { _id: 60f3cd168e61cf0fc8e291c1, name: 'rice', price: 20, __v: 0 }
```




