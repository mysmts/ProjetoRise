import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
    };
  }
}

interface JwtPayload {
  userId: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Token não fornecido" });
    return;
  }

  const [, token] = authHeader.split(" ");

  try {
    const secretKey = process.env.JWT_SECRET || "secret";
    const decoded = jwt.verify(token, secretKey) as JwtPayload;

    // Adiciona o usuário ao objeto req (caso seja necessário usá-lo nas rotas)
    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido ou expirado" });
  }
};
