
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] }
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;








const userSchema = new Schema({ name: String }, { timestamps: true });
const User = mongoose.model('User', userSchema);

let doc = await User.create({ name: 'test' });

console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.244Z

doc.name = 'test2';
await doc.save();
console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.307Z

doc = await User.findOneAndUpdate({ _id: doc._id }, { name: 'test3' }, { returnDocument: 'after' });
console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.366Z



// `findOneAndReplace()` and `replaceOne()` without timestamps specified in `replacement`
// sets `createdAt` and `updatedAt` to current time.
doc = await User.findOneAndReplace(
  { _id: doc._id },
  { name: 'test3' },
  { returnDocument: 'after' }
);
console.log(doc.createdAt); // 2022-02-26T17:08:14.008Z
console.log(doc.updatedAt); // 2022-02-26T17:08:14.008Z

// `findOneAndReplace()` and `replaceOne()` with timestamps specified in `replacement`
// sets `createdAt` and `updatedAt` to the values in `replacement`.
doc = await User.findOneAndReplace(
  { _id: doc._id },
  {
    name: 'test3',
    createdAt: new Date('2022-06-01'),
    updatedAt: new Date('2022-06-01')
  },
  { returnDocument: 'after' }
);
console.log(doc.createdAt); // 2022-06-01T00:00:00.000Z
console.log(doc.updatedAt); // 2022-06-01T00:00:00.000Z




