// Configuración del server
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const volleyball = require("volleyball");
const routes = require("./routes");
const db = require("./db");
const models = require("../api/models"); //VER SI DESPUES SE PUEDE SACAR

// logging middleware
app.use(volleyball);

// parsing middleware
app.use(express.json());
//cookie parser
app.use(cookieParser());

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log("Servidor escuchando en el puerto 3001"));
});
