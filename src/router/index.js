import express from "express";
import bookServiceRouter from "./service/index.js"
import bookWorkerRouter from "./worker/index.js"
import bookingHistoryRouter from "./history/index.js"

const router = express.Router();

router.use("/booking/worker", bookWorkerRouter);

router.use("/booking/service", bookServiceRouter);

router.use("/booking/history", bookingHistoryRouter);

export default router;