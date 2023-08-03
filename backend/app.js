// const express = require("express");
// const ErrorHandler = require("./middleware/error");
// const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// // const path = require("path");

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials: true
// }));



// app.use(express.json({limit:'50mb'}));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true,limit:'50mb' }));
// // app.use(fileUpload());

// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({
//     path: "config/.env",
//   });
// }

// // import routes
// const user = require("./controller/user");
// const shop = require("./controller/shop");
// const product = require("./controller/product");
// const event = require("./controller/event");
// const coupon = require("./controller/coupounCode");
// const payment = require("./controller/payment");
// const order = require("./controller/order");
// const conversation = require("./controller/conversation");
// const message = require("./controller/message");
// const withdraw = require("./controller/withdraw");


// app.use("/api/v2/user", user);
// app.use("/api/v2/shop", shop);
// app.use("/api/v2/product", product);
// app.use("/api/v2/conversation", conversation);
// app.use("/api/v2/message", message);
// app.use("/api/v2/order", order);
// app.use("/api/v2/event", event);
// app.use("/api/v2/coupon", coupon);
// app.use("/api/v2/payment", payment);
// app.use("/api/v2/withdraw", withdraw);



// // it's for ErrorHandling
// app.use(ErrorHandler);

// module.exports = app;


import  express  from "express";
import ErrorHandler from "./middleware/error.js"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true,limit:'50mb' }));




// import routes
import user from "./router/userRouter.js";
import product from "./router/productRoute.js";
import order from "./router/orderRoute.js";
import shop from "./router/shopRouter.js";
import message from "./router/routeMessage.js";
import event from "./router/eventRoute.js";
import conversation from "./router/conversationRoute.js";
import coupon from "./router/couponRouter.js";
import payment from "./router/paymentRouter.js";
import withdraw from "./router/withdrawRouter.js";


app.use("/api/v2/user", user);
app.use("/api/v2/product", product);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/message", message);
app.use("/api/v2/event", event);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

 // it's for ErrorHandling
app.use(ErrorHandler);


export default app;








