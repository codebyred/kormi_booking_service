import express from "express"
import {setBookingStatusToTrue} from "../../../controller/success/index.js";;

const router = express.Router();

router.post("/:bookingId", setBookingStatusToTrue)


export default router;