import { Router } from "express";

const router = Router();

// Routes
router.get("/", (req, res) => res.render("index", {title: "Mugiwaras"}));

export default router;
