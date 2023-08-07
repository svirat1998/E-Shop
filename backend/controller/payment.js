


import catchAsyncErrors from "../middleware/catchAsyncErrors.js";

import stripe from "stripe" 
(process.env.STRIPE_SECRET_KEY);


    export const paymentCreate = catchAsyncErrors(async (req, res, next) => {
    const myPayment = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "inr",
      metadata: {
        company: "sonuSingh",
      },
    });
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })



    export const getApiKey =catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
  })















