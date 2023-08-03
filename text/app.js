
import express  from "express";
import  cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import  fileUpload from "express-fileupload"
import path from "path"
import dotenv from "dotenv"
import cors from "cors"
const app = express();


import errorMiddleware from "./middleware/error.js"

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   ("dotenv").config({ path: "backend/config/config.env" });
// }
dotenv.config({ path: "/config/config.env" })

app.use(cors())
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
import product from "./routes/productRoute.js"
import user from "./routes/userRoute.js";
import order from "./routes/orderRoute.js";
import  payment from "./routes/paymentRoute.js";
// LatestProduct Route 
// const menProduct = require("./routes/menRoute");
// const womenProduct = require("./routes/womenRoute");
// const kidProduct = require("./routes/kidRoute");
// const bagProduct = require("./routes/bagRoute");
// const mobileProduct = require("./routes/mobileRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
// LatestProduct Route 
// app.use("/api/v2", menProduct);
// app.use("/api/v3", womenProduct);
// app.use("/api/v4", kidProduct);
// app.use("/api/v5", bagProduct);
// app.use("/api/v6", mobileProduct);

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors
app.use(errorMiddleware);

export default app;
