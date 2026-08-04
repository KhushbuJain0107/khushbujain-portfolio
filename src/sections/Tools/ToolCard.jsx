const ToolCard = ({ category, tools }) => {
  return (
    <div className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Top Accent */}
      <div className="w-16 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-24 transition-all duration-300"></div>

      {/* Category */}
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {category}
      </h3>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {tools.map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 cursor-default"
          >
            {tool}
          </span>
        ))}
      </div>

    </div>
  );
};

export default ToolCard;