const mongoose =  require("mongoose");

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese un nombre"],
        unique: false,
    },
    email: {
        type: String,
        required: [true, "Por favor ingrese un Correo Electrónico"],
        unique: [true, "Correo Electrónico ya registrado"],
    },
    password: {
        type: String,
        required: [true, "Por favor ingrese una contraseña válida"],
        unique: false,
    },
});

module.exports = mongoose.model.Usuarios || mongoose.model("Usuarios", userSchema);
