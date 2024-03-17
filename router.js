import { Router } from "express";
const router = Router();

router.get("/data", (req, res, next) => {
  res.json({ message: "ok" });
});

export default router;
