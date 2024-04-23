import { ServiceBooking } from "../../model/service/index.js";
import { WorkerBooking } from "../../model/worker/index.js";

export const setBookingStatusToFalse = async(req, res)=>{

    return res.json({msg:"Updated payment status"});

}