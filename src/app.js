
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
