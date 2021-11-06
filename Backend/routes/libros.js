import express from "express";
import libros from "../Controllers/libros.js";

const router = express.Router();

router.post("/registerLibros", libros.registerLibros);

export default router;
