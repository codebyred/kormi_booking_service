import express from "express"
import { saveBooking } from "../controller/serviceBooking.controller.js";

const router = express.Router();


router.post("/", saveBooking);


export default router;