"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import axios from "../services/axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);

  useEffect(() => {
    axios
      .get("/testimonials")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses", error);
      });
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        720: { slidesPerView: 2 }, // Tela média (ex: tablets)
      }}
      pagination
      modules={[Pagination]}
      className="mySwiper w-full"
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {testimonials &&
        testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard
              name={testimonial.name}
              content={testimonial.content}
              id={testimonial.id}
              avatar={testimonial.avatar}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
