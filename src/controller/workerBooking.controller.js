import { WorkerBooking } from "../model/workerBooking.model.js";


export const getBooking = async(req, res)=>{

}

export const saveBooking = async (req, res)=>{

    try{

        const {clientId, workerId} = await req.body;

        const workerBooking = await WorkerBooking.build({

            id: Math.floor(Math.random() * 100000), 
            type:"worker",
            clientId,
            workerId,
            status:"pending"
        });

        await workerBooking.save();

        return res.json({success:1, msg: "Worker booked successfully"})

    }catch(e){

        return res.json({success:0, msg: "Could not book worker"});

    }


}