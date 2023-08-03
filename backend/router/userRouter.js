import express from "express";
import { activationUser, deleteUserAddress, deleteUserWithdraw, getUser, loginUser, logoutUser, registerUser, updateAddress, updateUser, updateUserAvatar, userWithdraw } from "../controller/user.js";
import {isAuthenticated,isUser} from "../middleware/auth.js"
const router = express.Router();

router.post("/create-user",registerUser)
router.post("/activation",activationUser)
router.post("/login-user",loginUser)
router.put("/update-payment-methods",isAuthenticated,userWithdraw)
router.delete("/delete-withdraw-method/",isAuthenticated,deleteUserWithdraw)
router.get("/getuser",isAuthenticated,getUser)
router.get("/logout",logoutUser);
router.put("/update-user-info",isAuthenticated,updateUser)
router.put("/update-avatar",isAuthenticated,updateUserAvatar)
router.put("/update-user-addresses",isAuthenticated,updateAddress)
router.delete("/delete-user-address/:id",isAuthenticated,deleteUserAddress)


export default router