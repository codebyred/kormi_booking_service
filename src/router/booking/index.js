import express from "express";
import bookServiceRouter from "./service/index.js"
import bookWorkerRouter from "./worker/index.js"
import bookingHistoryRouter from "./history/index.js"
import successRouter from "./success/index.js"

const router = express.Router();

router.use("/success", successRouter);

router.use("/worker", bookWorkerRouter);

router.use("/service", bookServiceRouter);

router.use("/history", bookingHistoryRouter);

export default router;