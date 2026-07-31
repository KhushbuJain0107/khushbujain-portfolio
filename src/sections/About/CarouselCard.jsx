const CarouselCard = ({ card }) => {
  return (
    <div
className="
  w-full
  max-w-lg
  mx-auto
  min-h-[500px]
  rounded-3xl
  bg-white
  border
  border-slate-200
  p-10
  shadow-md
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-[1.02]
  hover:shadow-xl
  hover:border-indigo-200
  flex
  flex-col
"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-indigo-50 border border-indigo-100 shadow-sm flex items-center justify-center mb-5">
          <card.icon
            size={30}
            strokeWidth={2}
            className="text-indigo-600"
          />
        </div>

        <h3
          className="text-2xl font-semibold text-gray-900"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          {card.title}
        </h3>
      </div>

      {/* Content */}
      <div className="mt-8 flex-1 flex flex-col items-center justify-center">
        {card.content.map((item, index) => (
          <p
            key={index}
            className={`text-center text-gray-700 leading-7 ${
              card.type === "education"
                ? index === 0
                  ? "text-lg font-medium"
                  : item.startsWith("📍")
                  ? "mt-8 text-sm text-gray-500"
                  : "mt-3 text-base"
                : "text-base mt-4"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;