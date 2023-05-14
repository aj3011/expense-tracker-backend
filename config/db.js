const mongoose = require("mongoose");
const dotenv = require("dotenv");

/* The path to be mentioned here should be relative to the root directory */
dotenv.config({ path: "./config/config.env" });

const DB = process.env.DB_CONNECTION_STRING.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
