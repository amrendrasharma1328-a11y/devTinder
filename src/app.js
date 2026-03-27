
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path to where your User model is defined

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb+srv://amrendrasharma1328_db_user:<db_password>@devtinder.4rkc8sb.mongodb.net/devTinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Create an instance of the User model
    const user = new User({
      firstname: 'Akshad',
      lastname: 'Jaiswal',
      email: 'Akshad@example.com',
      age: 22,
      gender: 'Male'
    });

    // Save the document to the database
    return user.save();
  })
  .then(doc => console.log('Document inserted:', doc))
  .catch(err => console.error('Error:', err))
  .finally(() => mongoose.disconnect());






  // Receiving Data Through POST API
  app.post("/signup",async(req,res)=>{
    const data =req.body;
    const user=new User(data)


    try {
      await user.save();
      res.send("User added sucessfully");
    }
    catch (err){
      res.status(400).send("error in saving the user"+err.message);
    }
  })
// Feed API - get all the users form the database
app.get("/feed", async (req, res) => {

    try {
        const users = await User.find({})
        if (users.length === 0) {
            res.send("No user found")
        } else {
            console.log(users);
            res.send(users)
        }
    }
    catch (err) {
        res.status(400).send("Something went wrong")
    }

})
// Handling Duplicate Documents with findOne()
app.get("/user",(req,res)=>{
  const userEmail=req.body.emailId;


  try {

    const users=await User.findOne({emailId: userEmail})
    if(users.length===0){
      res.status(400).send("User not found ");
    }
    else {
      res.send(users);
    }
  }
  catch(err) {
res.status(400).send("something went wrong");
  }
})


// Delete API - Removing Documents from Database

    //delete user API - deleting a user by its id
app.delete("/user", async (req, res) => {
    const userId = req.body.userId;

    try {
        const users = await User.findByIdAndDelete(userId);
        res.send("User deleted Successfully")

    } catch (err) {
        res.status(400).send("Something went wrong")
    }
})

