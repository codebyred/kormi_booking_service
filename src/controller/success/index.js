import { ServiceBooking } from "../../model/service/index.js";
import { WorkerBooking } from "../../model/worker/index.js";

export const setBookingStatusToTrue = async(req, res)=>{

    const bookingId = req.params.bookingId;

    await WorkerBooking.update({paid: true},{
        where:{
            id:bookingId
        }
    });

    await ServiceBooking.update({paid: false},{
        where:{
            id:bookingId
        }
    });

    return res.json({msg:"Updated payment status"});

}