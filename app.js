const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dbConnect = require("./db/dbConnect");
const Usuario = require("./db/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("./auth");

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

dbConnect();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/registro", (request, response) => {
  bcrypt.hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new Usuario ({
        nombre: request.body.nombre,
        email: request.body.email,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          response.status(201).send({
            message: "Usuario creado",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "El usuario no ha podido ser creado",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(500).send({
        message: "La contraseña no fue hasheada correctamente",
        e,
      });
    });
});

// Login end point
app.post("/login", (request, response) => {
  //Buscamos si existe un usuario registrado con el mail del request
  Usuario.findOne({email: request.body.email}) 
  .then((user) => {
    //Si esta registrado se chequea la contraseña
    bcrypt.compare(request.body.password, user.password)
    .then((passwordCheck) => {
      if(!passwordCheck) {
        return response.status(400).send({
          message: "La contraseña esta incorrecta",
          error,
        });
      }
      //Se crea el token para generar el acceso
      const token = jwt.sign(
        {
          userId: user._id,
          userNombre : user.nombre,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        {expiresIn: "24h"}
      );
        // Se envia respuesta con la creacion del token
        response.status(200).send({
          message: "Login completado",
          nombre: user.nombre,
          email: user.email,
          token,
        });
    })
    // se atrapa el error de que la contraseña sea incorrecta
    .catch((error) => {
      response.status(400).send({
        message: "La contraseña esta incorrecta",
        error,
      });
    });
  })
  // se atrapa el error en el mail proporcionado
  .catch((e) => {
    response.status(400).send({
      message: "Email no encontrado",
      e,
    });
  });
})

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "Eres libre de accederme en cualquier momento" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "Estas autorizado a accederme"});
});

module.exports = app;

