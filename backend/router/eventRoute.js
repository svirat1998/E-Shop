import  express from "express";
import { createEvent, deleteEvent, getAllEvent, getAllEventId ,getAllEventAdmin} from "../controller/event.js";
import {  isAdmin, isAuthenticated } from "../middleware/auth.js";

const router =express.Router();

router.post("/create-event",createEvent);
router.get("/get-all-events",getAllEvent);
router.get("/get-all-events/:id",getAllEventId);
router.delete("/delete-event/:id",deleteEvent);
router.get("/admin-all-events",  isAuthenticated,isAdmin("Admin"),getAllEventAdmin);

export default router