import express from "express"
import { saveBooking } from "../../../controller/service/index.js";

const router = express.Router();

router.post("/", saveBooking);

export default router;