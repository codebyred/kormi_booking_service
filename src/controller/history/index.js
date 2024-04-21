import { ServiceBooking } from "../../model/service/index.js";
import { WorkerBooking } from "../../model/worker/index.js";


export const getBookingHistory = async(req, res)=>{
    const {clientId} = req.query;

    

    if(!clientId){
        return res.json({
            servicesBookedByClient:[],
            workersBookedByClient:[]
        })
    } 
    console.log(clientId)
    const servicesBookedByClient = await ServiceBooking.findAll({where:{clientId:Number(clientId)}});
    const workersBookedByClient = await WorkerBooking.findAll({where:{clientId:Number(clientId)}});

    return res.json({
        servicesBookedByClient,
        workersBookedByClient
    })
}