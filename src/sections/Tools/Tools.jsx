import ToolsHeader from "./ToolsHeader";
import ToolCard from "./ToolCard";
import tools from "./ToolsData";

const Tools = () => {
  return (
    <section
      id="tools"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        <ToolsHeader />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {tools.map((item) => (
            <ToolCard
              key={item.category}
              category={item.category}
              tools={item.tools}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Tools;