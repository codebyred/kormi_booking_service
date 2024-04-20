import express from "express";
import routes from "./router/index.js"

const app = express();
const port = process.env.PORT || 3107;


app.use(express.json());

app.use("/api/",routes);

app.listen(port, async (err) =>{
    if(err) return console.log(`Could not establish connection on ${port}`);

    console.log(`connection is established on ${port}`);

    const register = async()=>{

        const body = {

            service:"booking",
            host:"http://localhost",
            port,
            url:`http://localhost:${port}`
    
        }
    
        const fetchOptions = {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
            credentials: "include",
        }
    
        const apiGatewayPort = "3020";
        const apiGatewayURL =  `http://localhost:${apiGatewayPort}/register`;

        await fetch(apiGatewayURL, fetchOptions);
   
    }

    try{    

        await register();

    }catch(e){

        console.log("Could not register to apiGateway");
        
    }
});