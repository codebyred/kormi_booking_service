import { sequelize } from "../../config/dbConn.config.js"
import { DataTypes } from "sequelize";

export const ServiceBooking = sequelize.define("ServiceBooking",{

    id: {

        type: DataTypes.STRING,
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

    },
    paid:{

        type:DataTypes.BOOLEAN,
        
    }

},{
    timestamps:true
});

(async ()=>{
    try{
        await ServiceBooking.sync();
    }catch(e){
        console.log("could not sync BookService")
    }
    
})();