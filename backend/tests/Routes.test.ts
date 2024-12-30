import request from "supertest";
import { AppDataSource } from "../src/database/data-source";
import app from "../src/index";

beforeAll(async () => {
  await AppDataSource.initialize();
  await AppDataSource.synchronize(true);
});

afterAll(async () => {
  await AppDataSource.destroy(); // Fechar conexão
});

describe("Testes para rotas de cursos", () => {
  let token: string;

  beforeAll(async () => {
    const response = await request(app).post("/auth/login").send({
      username: "admin",
      password: "123456",
    });
    console.log(response.body);
    token = response.body.token; // Armazena token
  });

  test("GET /courses - Deve listar todos os cursos", async () => {
    const response = await request(app).get("/courses");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Verifica se é uma lista
  });

  test("GET /course - Não deve listar todos os cursos ao acessar rota inexistente", async () => {
    const response = await request(app).get("/course");
    expect(response.status).toBe(404);
  });

  test("POST /courses - Deve criar um novo curso", async () => {
    const newCourse = {
      title: "Curso Teste",
      description: "Descrição Teste",
      image: "imagem.png",
    };

    const response = await request(app)
      .post("/courses")
      .set("Authorization", `Bearer ${token}`)
      .send(newCourse);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  test("POST /courses - Não deve criar um novo curso sem o Bearer Token", async () => {
    const newCourse = {
      title: "Curso Teste",
      description: "Descrição Teste",
      image: "imagem.png",
    };

    const response = await request(app).post("/courses").send(newCourse);
    expect(response.status).toBe(401);
  });

  test("PUT /courses/:id - Deve atualizar um curso existente", async () => {
    const updatedCourse = { title: "Curso Atualizado" };

    const response = await request(app)
      .put("/courses/1")
      .set("Authorization", `Bearer ${token}`)
      .send(updatedCourse);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Curso Atualizado");
  });

  test("PUT /courses/:id - Não deve atualizar um curso existente sem um Bearer Token", async () => {
    const updatedCourse = { title: "Curso Atualizado" };

    const response = await request(app).put("/courses/1").send(updatedCourse);

    expect(response.status).toBe(401);
  });

  test("DELETE /courses/:id - Deve deletar um curso", async () => {
    const response = await request(app)
      .delete("/courses/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Curso deletado com sucesso");
  });

  test("DELETE /courses/:id - Não deve deletar um curso sem um Bearer Token", async () => {
    const response = await request(app).delete("/courses/1");

    expect(response.status).toBe(401);
  });

  test("GET /testimonials - Deve listar todos os depoimentos", async () => {
    const response = await request(app).get("/testimonials");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Verifica se é uma lista
  });

  test("GET /testimonial - Não deve listar todos os depoimentos ao acessar rota inexistente", async () => {
    const response = await request(app).get("/testimonial");
    expect(response.status).toBe(404);
  });

  test("POST /testimonials - Deve criar um novo depoimento", async () => {
    const newTestimonial = {
      name: "João da Silva",
      content: "Excelente serviço!",
      avatar: "joao.png",
    };

    const response = await request(app)
      .post("/testimonials")
      .set("Authorization", `Bearer ${token}`)
      .send(newTestimonial);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  test("POST /testimonials - Não deve criar um novo depoimento sem o Bearer Token", async () => {
    const newTestimonial = {
      name: "João da Silva",
      content: "Excelente serviço!",
      avatar: "joao.png",
    };

    const response = await request(app)
      .post("/testimonials")
      .send(newTestimonial);
    expect(response.status).toBe(401);
  });

  test("PUT /testimonials/:id - Deve atualizar um depoimento existente", async () => {
    const updatedTestimonial = { content: "Serviço ainda melhor!" };

    const response = await request(app)
      .put("/testimonials/1")
      .set("Authorization", `Bearer ${token}`)
      .send(updatedTestimonial);

    expect(response.status).toBe(200);
    expect(response.body.content).toBe("Serviço ainda melhor!");
  });

  test("PUT /testimonials/:id - Não deve atualizar um depoimento existente sem um Bearer Token", async () => {
    const updatedTestimonial = { message: "Serviço ainda melhor!" };

    const response = await request(app)
      .put("/testimonials/1")
      .send(updatedTestimonial);

    expect(response.status).toBe(401);
  });

  test("DELETE /testimonials/:id - Deve deletar um depoimento", async () => {
    const response = await request(app)
      .delete("/testimonials/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Depoimento deletado com sucesso");
  });

  test("DELETE /testimonials/:id - Não deve deletar um depoimento sem um Bearer Token", async () => {
    const response = await request(app).delete("/testimonials/1");

    expect(response.status).toBe(401);
  });
});
