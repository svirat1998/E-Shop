const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
// const cors =require("cors")

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true,limit:'50mb' }));
app.use(fileUpload());
// app.use(express.urlencoded({limit:'25mb'}));


// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );


// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
// LatestProduct Route 
const menProduct = require("./routes/menRoute");
const womenProduct = require("./routes/womenRoute");
const kidProduct = require("./routes/kidRoute");
const bagProduct = require("./routes/bagRoute");
const mobileProduct = require("./routes/mobileRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
// LatestProduct Route 
app.use("/api/v2", menProduct);
app.use("/api/v3", womenProduct);
app.use("/api/v4", kidProduct);
app.use("/api/v5", bagProduct);
app.use("/api/v6", mobileProduct);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
