import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Course } from "./entity/Course";
import { Testimonial } from "./entity/Testimonial";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Course, Testimonial],
  migrations: ["src/database/migration/*.ts"],
  synchronize: true,
  logging: process.env.NODE_ENV === "development", // Logs apenas em dev
});
