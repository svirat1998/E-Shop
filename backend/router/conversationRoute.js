import  express from "express";

import {  isSeller, isAuthenticated } from "../middleware/auth.js";
import { creteConversation, getSellerConversations,getUserConversations, updateLastMessage } from "../controller/conversation.js";

const router =express.Router();

router.post("/create-new-conversation",creteConversation);
router.get("/get-all-conversation-seller/:id",isSeller,getSellerConversations);
router.get("/get-all-conversation-user/:id",isAuthenticated,getUserConversations);
router.put("/update-last-message/:id",isAuthenticated,updateLastMessage);


export default router