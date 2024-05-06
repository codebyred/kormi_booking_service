import { WorkerBooking } from "../../../../model/worker/index.js";
import express from "express"


const router = express.Router();

router.get("/:workerId", async (req, res)=>{

    const {workerId} = req.params;

    console.log(workerId)

    if(!workerId){
        throw new Error("no history found")

    } 
    try{

        const history = await WorkerBooking.findAll({where:{workerId:Number(workerId)}});

        return res.json({
            history
        });

    }catch(e){
        return res.json({
            history:[]
        })
    }

});



export default router;

