import { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"], // Carregar variáveis do .env
};

export default config;
