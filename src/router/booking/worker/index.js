import express from "express"
import {getBooking, saveBooking} from "../../../controller/worker/index.js";
import historyRouter from "./history/index.js"

const router = express.Router();

router.get("/", getBooking);

router.post("/", saveBooking);

router.use("/history", historyRouter);


export default router;