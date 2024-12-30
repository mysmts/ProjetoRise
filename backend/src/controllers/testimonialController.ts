import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { validate } from "class-validator";
import { Testimonial } from "../database/entity/Testimonial";

const testimonialRepository = AppDataSource.getRepository(Testimonial);

// Listar todos os depoimentos
export const getTestimonials = async (_: Request, res: Response) => {
  try {
    const testimonials = await testimonialRepository.find({
      order: { createdAt: "DESC" },
    });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar depoimentos", error });
  }
};

// Criar um novo depoimento
export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = testimonialRepository.create(req.body);
    const errors = await validate(testimonial);

    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    }

    const savedTestimonial = await testimonialRepository.save(testimonial);
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar depoimento", error });
  }
};

// Atualizar um depoimento
export const updateTestimonial = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const testimonial = await testimonialRepository.findOneBy({
      id: Number(id),
    });

    if (!testimonial) {
      res.status(404).json({ message: "Depoimento não encontrado" });
      return;
    }

    testimonialRepository.merge(testimonial, req.body);
    const errors = await validate(testimonial);

    if (errors.length > 0) {
      res.status(400).json(errors);
      return;
    }

    const updatedTestimonial = await testimonialRepository.save(testimonial);
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar depoimento", error });
  }
};

// Deletar um depoimento
export const deleteTestimonial = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await testimonialRepository.delete(id);

    if (result.affected === 0) {
      res.status(404).json({ message: "Depoimento não encontrado" });
      return;
    }

    res.status(200).json({ message: "Depoimento deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar depoimento", error });
  }
};
