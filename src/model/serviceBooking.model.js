import { sequelize } from "../config/dbConn.config.js"
import { DataTypes } from "sequelize";

export const ServiceBooking = sequelize.define("ServiceBooking",{

    id: {

        type: DataTypes.INTEGER,
        primaryKey:true

    },
    clientId:{

        type: DataTypes.INTEGER

    },
    serviceId:{

        type: DataTypes.INTEGER

    },
    status:{

        type: DataTypes.STRING

    }

},{
    timestamps:false
});

(async ()=>{
    try{
        await ServiceBooking.sync();
    }catch(e){
        console.log("could not sync BookService")
    }
    
})();