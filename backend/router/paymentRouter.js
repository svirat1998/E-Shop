import express from "express"
import { getApiKey, paymentCreate } from "../controller/payment.js";

const router =express.Router();

router.post("/process",paymentCreate);
router.get("/stripeapikey",getApiKey);

export default router;