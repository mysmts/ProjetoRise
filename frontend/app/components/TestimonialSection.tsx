import TestimonialList from "./TestimonialList";

export default function TestimonialSection() {
  return (
    <section className="container mx-auto max-w-[1230px]">
      <div className="text-[#062165] text-3xl font-medium text-center py-[60px]">
        O que nossos alunos dizem
      </div>
      <div className="py-[80px]">
        <TestimonialList />
      </div>
    </section>
  );
}
