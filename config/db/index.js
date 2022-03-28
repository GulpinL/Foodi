const mongoose = require("mongoose");

async function connect() {
  try {
    console.log(process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
}

module.exports = { connect };
