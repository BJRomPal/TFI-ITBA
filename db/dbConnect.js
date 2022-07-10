const mongoose = require("mongoose");
require('dotenv').config();

async function dbConnect() {
    mongoose
        .connect(
            process.env.DB_URL, 
            {maxPoolSize:50,
            wtimeoutMS:2500,}
        )
        .then(() => {
            console.log("Conexion exitosa a MongoDB Atlas");
        })
        .catch((error) => {
            console.log("No se pudo conectar a MongoDB Atlas");
            console.error(error);
        });
}

module.exports = dbConnect;

