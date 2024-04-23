import express from "express"
import {getBooking, saveBooking} from "../../../controller/worker/index.js";;

const router = express.Router();

router.get("/", getBooking);

router.post("/", saveBooking);


export default router;