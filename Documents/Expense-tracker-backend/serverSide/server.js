const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const transactionRouter = require("./routes/transactionRouter");
const connectDB = require("./config/db");
const corsOptions = require("./config/corsOptions");
const app = express();

// Path here should be relative to the root of the project
dotenv.config({ path: "./config/config.env" });

// Establishing the connection to the cluster
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors(corsOptions));

// Middleware that allows us to use body-parser
app.use(express.json());

//Middleware to serve static files
app.use(express.static(__dirname + "/public"));

//middleware to specify the use of transactionRouter for handling requests on the mentioned route
app.use("/api/v1/transactions", transactionRouter);

app.listen(
  process.env.PORT || 3000,
  console.log(`Server running `.yellow.bold)
);
