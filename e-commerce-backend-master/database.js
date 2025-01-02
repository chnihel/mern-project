// database.js
const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Nihel:fnSpZEsoyIMiGKP7@cluster0.fpp1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/newapp");
    console.log("Connection successful");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;
