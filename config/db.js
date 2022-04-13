// const mongoose = require("mongoose");

// async function connect() {
//   try {
//     console.log(process.env.MONGODB_URL);
//     await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.log("Error connecting to MongoDB: ", error.message);
//   }
// }

// module.exports = { connect };





// const { MongoClient } = require("mongodb");
// require('dotenv').config();
// const uri = process.env.MONGODB_URL;
// const client = new MongoClient(uri);

// exports.connect = () => {
//   return client.connect();
// }

// exports.db = () => {
//   return client.db();
// }


const mongoose = require("mongoose");

function connect() {
  
    console.log(process.env.MONGODB_URL);
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  
}

module.exports = { connect };
