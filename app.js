// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   findDocuments(db, function() {
//       client.close();
//   });
// });


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true, useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
  name : String,
  score : Number,
  review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name : "apple",
  score : 7,
  review: "okay"
});
fruit.save();

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name : "apple",
//       score : 7,
//       review: "okay"
//     },
//     {
//       name : "orange",
//       score : 9,
//       review: "good"
//     },
//     {
//       name : "banana",
//       score : 10,
//       review: "awesome"
//     }
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }


const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
