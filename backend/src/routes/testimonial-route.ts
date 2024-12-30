import { Router } from "express";
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController";
import { authMiddleware } from "../middleware/auth-middleware";

const router = Router();

router.get("/", getTestimonials); // Listar todos
router.post("/", authMiddleware, createTestimonial); // Criar novo
router.put("/:id", authMiddleware, updateTestimonial); // Atualizar
router.delete("/:id", authMiddleware, deleteTestimonial); // Deletar

export default router;
