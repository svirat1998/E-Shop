import express from "express"
import { allProductAdmin, createProduct, createProductReview, deleteShopProduct, getAllProduct, getAllProductShop, productDetails, updateAdminProduct } from "../controller/product.js"
import {isUser,isAuthenticated,isAdmin} from "../middleware/auth.js"

const router = express.Router()

router.post("/create-product",createProduct);
router.get("/get-all-products-shop/:id",getAllProductShop)
router.get("/get-all-products",getAllProduct);
// router.delete("/delete-shop-product/:id",isSeller,deleteShopProduct)
router.post("/create-new-review",isAuthenticated,createProductReview)
router.get("/admin-all-products",isAuthenticated,isAdmin("Admin"),allProductAdmin)
router.put("/admin-update-product/:id",updateAdminProduct)
router.delete("/delete-shop-product/:id",isUser,isAuthenticated,isAdmin("Admin"),deleteShopProduct)
router.get("/product/:id",productDetails);


export default router