import CourseList from "./CourseList";

export default function CourseSection() {
  return (
    <section className="container mx-auto max-w-[1230px]">
      <div className="text-[#062165] text-3xl font-medium text-center py-[40px]">
        Confira nossos cursos preparatórios
      </div>
      <div className="mt-[80px]">
        <CourseList />
      </div>
    </section>
  );
}
