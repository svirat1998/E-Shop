import  express from "express";

import {  isAdmin,isUser, isAuthenticated } from "../middleware/auth.js";
import { creteConversation, getAdminConversations,getUserConversations, updateLastMessage } from "../controller/conversation.js";

const router =express.Router();

router.post("/create-new-conversation",creteConversation);
router.get("/get-all-conversation-admin/:id",isAdmin,getAdminConversations);
router.get("/get-all-conversation-user/:id",isAuthenticated,getUserConversations);
router.put("/update-last-message/:id",isAuthenticated,updateLastMessage);


export default router