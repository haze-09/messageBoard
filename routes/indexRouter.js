import { Router } from "express";
import * as indexController from '../controllers/indexController.js'

const indexRouter = Router();

indexRouter.get("/", indexController.indexGet);

indexRouter.get("/new", indexController.indexNewGet);

indexRouter.post("/new", indexController.indexNewPost);

export default indexRouter;
