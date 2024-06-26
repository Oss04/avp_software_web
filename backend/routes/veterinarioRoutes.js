import express from "express";
import checkAuth from "../middleware/middleware.js";
import {
  registrar, perfil, confirmar,
  autenticar, olvidePassword,
  comprobarToken, nuevoPassword,
  actualizarPerfil, actualizarPassword
} from "../controllers/veterinarioController.js";


const router = express.Router();

//publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);

// router.get("/api/veterinarios/olvide-password/:token", comprobarToken);
// router.get("/api/veterinarios/olvide-password/:token", nuevoPassword);
// estas dos lineas de codigo es lo mismo que la siguiente:
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
//privada
router.get("/perfil", checkAuth, perfil);
router.put("/perfil:id", checkAuth, actualizarPerfil);
router.put("/actualizar-password", checkAuth, actualizarPassword);

export default router;