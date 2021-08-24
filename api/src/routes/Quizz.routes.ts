import { Router } from "express";
const router = Router();

import * as quetionCrtl from "./quetion.controller";

router.get("/question", quetionCrtl.getQuetions);

router.get("/question/:id", quetionCrtl.getQuetion);

router.post("/question", quetionCrtl.createQuetion);

router.put("/question/:id", quetionCrtl.updateQuetion);

router.delete("/question/:id", quetionCrtl.deleteQuetion);

export default router;
