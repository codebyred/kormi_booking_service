import { sequelize } from "../../config/dbConn.config.js"
import { DataTypes } from "sequelize";

export const WorkerBooking = sequelize.define("WorkerBooking",{

    id: {

        type: DataTypes.STRING,
        primaryKey:true

    },
    clientId:{

        type: DataTypes.INTEGER

    },
    workerId:{

        type: DataTypes.INTEGER

    },
    status:{

        type: DataTypes.STRING

    },
    paid:{

        type:DataTypes.BOOLEAN,
        
    }

},{
    timestamps:true
});

(async ()=>{
    try{
        await WorkerBooking.sync();
    }catch(e){
        console.log("could not sync BookWorker")
    }
    
})();