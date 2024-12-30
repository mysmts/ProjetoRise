import { FaStar } from "react-icons/fa";

export default function TestimonialCard(data: ITestimonial) {
  return (
    <div className="border p-8">
      <div className="flex items-center gap-3">
        <img
          src={data.avatar}
          className="w-16 sm:w-20 md:w-24 rounded-full"
          alt={data.name}
        />
        <div>
          <h3 className="text-[#062165] font-semibold text-lg">{data.name}</h3>
          <div className="flex gap-1 mt-1">
            <FaStar className="text-[#FFC107]" />
            <FaStar className="text-[#FFC107]" />
            <FaStar className="text-[#FFC107]" />
            <FaStar className="text-[#FFC107]" />
            <FaStar className="text-[#FFC107]" />
          </div>
        </div>
      </div>
      <div>
        <p className="font-normal text-base text-[#062165CC]/80">
          {data.content}
        </p>
      </div>
    </div>
  );
}
