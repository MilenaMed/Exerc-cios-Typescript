import joi from "joi";
import { Music } from "protocols";

const musicSchemma = joi.object<Music>({
  title: joi.string().required(),
  artist: joi.string().required()
})

export default musicSchemma;