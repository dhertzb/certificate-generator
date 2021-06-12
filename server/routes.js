import { Router } from "express";
import { GeneratorController } from "./controllers/generator.js";
import multer from "multer";
import multerConfig from "./config/multer.js";
let router = Router();

router.post(
  "/api/generate",
  multer(multerConfig).single("template"),
  GeneratorController.generateCertificate
);

export default router;
