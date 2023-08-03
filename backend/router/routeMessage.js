import express from "express"
import { allMessage, creteMessage } from "../controller/message.js";

const router = express.Router();

router.post("/create-new-message",creteMessage);
router.get("/get-all-messages/:id",allMessage);

export default router