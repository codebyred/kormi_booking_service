import express from "express"
import {getBooking, saveBooking} from "../controller/workerBooking.controller.js";

const router = express.Router();

router.get("/", getBooking);

router.post("/", saveBooking);


export default router;