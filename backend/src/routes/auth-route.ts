import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

// Rota para login e geração de token
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simulando um usuário com credenciais fixas para o exemplo
  const mockUser = { id: "1", username: "admin", password: "123456" };

  // Verificação simples (substitua pelo banco de dados)
  if (username === mockUser.username && password === mockUser.password) {
    const secretKey = process.env.JWT_SECRET || "secret";
    const token = jwt.sign({ userId: mockUser.id }, secretKey, {
      expiresIn: "1h", // Token válido por 1 hora
    });

    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

export default router;
