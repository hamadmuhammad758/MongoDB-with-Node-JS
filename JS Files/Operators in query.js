const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/NodeMongoDb")
        .then(()=> console.log("Connected Succesfully with NodeMongodb"))
        .catch(()=>console.log("Unable to connect with NodeMongodb"));
const productSchema = new mongoose.Schema({
        name: String,
        price:Number
});


const Product = mongoose.model("Product",productSchema);


async function createProduct(array){
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



let a= [{name:"rice",price:20},{name:"shampoo",price:30},{name:"Lotion",price:40},{name:"Perfume",price:50},{name:"Polish",price:60}]


//createProduct(a);

// eq (equal to)
// ne (Not equal to)
// gt (greater then)
// lt (less then)
// gte (Greater than equal to )
// lte (Less then equal to)
// in (present in provided data ?)
// nin (not present in provided data ?)

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

getProducts();


