export default function CourseCard(data: ICourse) {
  return (
    <div className="space-y-[10px] p-4 md:p-0">
      <div>
        <img
          src={data.image}
          alt={data.title}
          className="object-cover w-full"
        />
      </div>
      <div className="text-2xl font-semibold text-[#062165]">{data.title}</div>
      <div className="text-base font-normal text-[#062165CC]/80">
        {data.description}
      </div>
      <button className="bg-[#005BFF] py-[10px] px-[18px] text-white rounded-[4px]">
        Saiba mais
      </button>
    </div>
  );
}
