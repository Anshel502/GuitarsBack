import express from "express";
import cors from "cors";
import router from "./router";
import db from "./config/db";

async function conectDb() {
    try {
        await db.authenticate();
        await db.sync(); 
        console.log("Conexion a base de datos exitosa");
    } catch (error) {
        console.log(error);
        console.log("Se registro un error en la conexion");
    }
}
conectDb();

const server = express();

server.use(cors()); 

server.use(express.json());

server.use("/api", router);

export default server;