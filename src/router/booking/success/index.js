import express from "express"
import {updateBookingStatus} from "../../../controller/worker/index.js";;

const router = express.Router();

router.post("/:bookingId", updateBookingStatus)


export default router;