import express from "express";
import bookServiceRouter from "./serviceBooking.router.js"
import bookWorkerRouter from "./workerBooking.router.js"

const router = express.Router();

router.use("/booking/worker", bookWorkerRouter );

router.use("/booking/service", bookServiceRouter);

export default router;