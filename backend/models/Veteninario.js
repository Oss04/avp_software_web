import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js";

const veterinarioSchema = mongoose.Schema({ //crea el esquema de la base de datos
  nombre: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true
  },
  telefono: {
    type: String,
    default: null,
    trim: true
  },
  web: {
    type: String,
    default: null
  },
  token: {
    type: String,
    default: generarId()
  },
  confirmado: {
    type: Boolean,
    default: false
  }
});

veterinarioSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

veterinarioSchema.methods.compararPassword = async function (passwordFormulary) {
  return await bcrypt.compare(passwordFormulary, this.password);
}

const Veterinario = mongoose.model("Veterinario", veterinarioSchema); //esto registra en mongoose el modelo

export default Veterinario;