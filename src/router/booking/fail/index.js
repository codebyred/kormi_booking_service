import express from "express"
import {setBookingStatusToFalse} from "../../../controller/fail/index.js";;

const router = express.Router();

router.post("/:bookingId", setBookingStatusToFalse)


export default router;