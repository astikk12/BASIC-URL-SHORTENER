import express from "express";
import controller from "../controllers/url.controller.js";

const router=express.Router();

router.post("/url",controller.addUrl);

router.get("/url",controller.getUrl);
router.get("/url/:id",controller.redirect)
router.get("/visit/:id",controller.analytics)
export default router