import express from "express"
import { getBookingHistory } from "../../../controller/history/index.js";

const router = express.Router();


router.get("/", getBookingHistory);


export default router;