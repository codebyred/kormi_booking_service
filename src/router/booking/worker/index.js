import express from "express"
import {getBooking, saveBooking, updateBookingStatus} from "../../../controller/worker/index.js";;

const router = express.Router();

router.get("/", getBooking);

router.post("/", saveBooking);


export default router;