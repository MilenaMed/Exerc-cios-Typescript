import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchemaMiddleware } from "middleware/validateMiddleware";
import musicSchemma from "schemmas/musicSchemma";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMiddleware(musicSchemma), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;