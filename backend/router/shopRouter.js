
import express from "express";

import {isAuthenticated,isSeller,isAdmin} from "../middleware/auth.js"
import { activationShop, allSeller, deleteSeller, deleteSellerWithdraw, getShopInfo, loadShop, logoutShop, sellerWithdraw, shopLogin, shopUser, updateSellerInfo, updateShopProfile } from "../controller/shop.js";
const router = express.Router();

router.post("/create-user",shopUser)
router.post("/activation",activationShop)
router.post("/login-shop",shopLogin)
router.get("/getSeller",isSeller,loadShop)
router.get("/logout",logoutShop)
router.get("/get-shop-info/:id",getShopInfo)
router.put("/update-shop-avatar",isSeller,updateShopProfile)
router.put("/update-seller-info",isSeller,updateSellerInfo)
router.get("/admin-all-sellers",isAuthenticated,isAdmin("Admin"),allSeller)
router.delete("/delete-seller/:id",isAuthenticated,isAdmin("Admin"),deleteSeller)
router.put("/update-payment-methods",isSeller,sellerWithdraw)
router.delete("/delete-withdraw-method/",isSeller,deleteSellerWithdraw)


export default router