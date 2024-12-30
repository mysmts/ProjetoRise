"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import axios from "../services/axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CourseCard from "./CourseCard";

export default function CourseList() {
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    axios
      .get("/courses")
      .then((response) => {
        setCourses(response.data);
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
        720: { slidesPerView: 3 }, // Tela média (ex: tablets)
      }}
      pagination
      modules={[Pagination]}
      className="mySwiper w-full"
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {courses &&
        courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              title={course.title}
              description={course.description}
              id={course.id}
              image={course.image}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
