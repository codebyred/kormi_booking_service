import { ServiceBooking } from "../../model/service/index.js";

export const saveBooking = async (req, res)=>{

    try{

        const {clientId, serviceId} = await req.body;

        const serviceBooking = await ServiceBooking.build({
            id: Math.floor(Math.random() * 100000), 
            type:"service",
            clientId,
            serviceId,
            status:"pending"
        });

        await serviceBooking.save();

        return res.json({success:1, msg: "Service booked successfully"})

    }catch(e){

        return res.json({success:0, msg: "Could not book Service"});

    }


}