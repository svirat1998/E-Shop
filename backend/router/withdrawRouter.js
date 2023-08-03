import express from "express"
import { createWithdraw, getAllWithdraws, updateWithdraw } from "../controller/withdraw.js";
import {  isAuthenticated, isAdmin } from "../middleware/auth.js";

const router = express.Router()

router.post("/create-withdraw-request",isAuthenticated,createWithdraw);
router.get("/get-all-withdraw-request",isAuthenticated,isAdmin("Admin"),getAllWithdraws);
router.put("/update-withdraw-request/:id",isAuthenticated,isAdmin("Admin"),updateWithdraw);

export default router;