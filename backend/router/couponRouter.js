
import  express from "express";

import {  isAdmin,isSeller, isAuthenticated } from "../middleware/auth.js";
import { createCoupoun, deleteCoupon, getCouponValueName, getCouponsId } from "../controller/coupounCode.js";

const router =express.Router();

router.post("/create-coupon-code",isAuthenticated,createCoupoun);
router.get("/get-coupon/:id",isAuthenticated,getCouponsId);
router.get("/get-coupon-value/:name",getCouponValueName);
router.delete("/delete-coupon/:id",isAuthenticated,deleteCoupon);


export default router