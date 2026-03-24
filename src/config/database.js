// const mongoose=require('mongoose');


// const connectDB=async ()=>{
//    await mongoose.connect("mongodb+srv://amrendrasharma1328_db_user:<db_password>@devtinder.4rkc8sb.mongodb.net/devTinder");
// };


// //  this return a promise thats why i use asysnc function 

// connectDB().then(()=>{
//     console.log("succesfull")
// }).catch((err)=>{
//     console.log("cannot the connect")
// })

// module.exports=connectDB;






const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;

// MongoDB connection string URL
const databaseUrl = 'mongodb+srv://amrendrasharma1328_db_user:<db_password>@devtinder.4rkc8sb.mongodb.net/devTinder';

// Connect to MongoDB using Mongoose
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server only after database connection is successful
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });