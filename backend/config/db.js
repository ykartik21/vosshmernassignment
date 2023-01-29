const mongoose = require("mongoose");

async function connectDb() {
  try {
    mongoose.set("strictQuery", true);
    const con = await mongoose.connect(process.env.URL);
    console.log("Connected to MongoDB", con.connection.host);
  } catch (error) {
    console.error(error);
    process.exit();
  }
}

module.exports = connectDb;
