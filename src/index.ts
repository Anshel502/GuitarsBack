//console.log("desde Index.ts Holaaaaaa!!!!!");
import server from "./server";
import dotenv from "dotenv";
dotenv.config();


const port = process.env.PORT || 4005;

// declarar el puerto 
server.listen(port,()=>{
    console.log("Rest api en el puerto 4005");
    console.log("escuchando desde la ruta");
    console.log("localhost 4005");
    
    
    
}

)