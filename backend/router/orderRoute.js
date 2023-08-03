import express from "express";
import { allOrderAdmin, creteNewOrder, getAllOrders, orderStatusSeller, refundAdmin,  refundUser } from "../controller/order.js";
import { isUser,isAuthenticated ,isAdmin} from "../middleware/auth.js";

const router = express.Router()

router.post("/create-order",creteNewOrder)
router.get("/get-all-orders/:userId",getAllOrders)
// router.get("/get-seller-all-orders/:shopId",getAllordersSeller)
router.put("/update-order-status/:id",isAuthenticated,orderStatusSeller)
router.put("/order-refund/:id",refundUser)
router.put("/order-refund-success/:id",isAuthenticated,refundAdmin)
router.get("/admin-all-orders",isAuthenticated,isAdmin("Admin"),allOrderAdmin)

export default router;