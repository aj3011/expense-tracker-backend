const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const transactionRouter = require("./routes/transactionRouter");
const connectDB = require("./config/db");
const cors = require("cors");
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

//my app on startup makes request to /, which is fine as once the request goes in, react router takes over and hijacks the routing. But on loadup, I landup at /login because of my client side logic.
//Now if I refresh, the server tries to make a request to /login, which leads to an error saying "cannot GET /login". It is because the server has no routing defined for /login. To fix that, I do the following
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    };
});

app.listen(
  process.env.PORT || 3000,
  console.log(`Server running `.yellow.bold)
);
