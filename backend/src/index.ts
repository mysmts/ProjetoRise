import { AppDataSource } from "./database/data-source";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import courseRoutes from "./routes/course-route";
import testimonialRoutes from "./routes/testimonial-route";
import authRoutes from "./routes/auth-route";

import "reflect-metadata";

// Carregar variáveis do .env
dotenv.config();

// Criação da aplicação Express
const app = express();

// Configurações do middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parse do corpo da requisição como JSON

AppDataSource.initialize()
  .then(async () => {
    AppDataSource.runMigrations();

    app.use("/courses", courseRoutes); // Rota para cursos
    app.use("/testimonials", testimonialRoutes); // Rota para depoimentos
    app.use("/auth", authRoutes); // Rota para autenticação

    // Rota de teste
    app.get("/", (req, res) => {
      res.send("API funcionando!");
    });

    // Iniciar o servidor
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((error: any) => console.log(error));

export default app;
