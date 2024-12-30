import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../controllers/courseController";
import { authMiddleware } from "../middleware/auth-middleware";

const router = Router();

// Rota para listar todos os cursos
router.get("/", getCourses);

// Rota para criar um novo curso
router.post("/", authMiddleware, createCourse);

// Rota para atualizar um curso existente
router.put("/:id", authMiddleware, updateCourse);

// Rota para deletar um curso
router.delete("/:id", authMiddleware, deleteCourse);

export default router;
