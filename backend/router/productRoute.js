import express from "express"
import { allProductAdmin, createProduct, createProductReview, deleteProduct, getAllProduct, productDetails, updateAdminProduct } from "../controller/product.js"
import {isUser,isAuthenticated,isAdmin} from "../middleware/auth.js"

const router = express.Router()

router.post("/create-product",createProduct);
router.get("/get-all-products",getAllProduct);
router.post("/create-new-review",isAuthenticated,createProductReview)
router.get("/admin-all-products",allProductAdmin)
router.put("/admin-update-product/:id",updateAdminProduct)
router.delete("/delete-product/:id",deleteProduct)
router.get("/product/:id",productDetails);


export default router