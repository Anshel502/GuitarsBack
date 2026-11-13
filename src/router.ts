import { Router } from "express";
import { createGuitar, getGuitars } from "./handlers/guitar";

const router = Router();

router.get("/guitars", getGuitars);
router.post("/guitars", createGuitar);

router.put("/guitars", (req, res) => {
    res.send("Desde PUT");
});

router.delete("/guitars", (req, res) => {
    res.send("Desde DELETE");
});

export default router;