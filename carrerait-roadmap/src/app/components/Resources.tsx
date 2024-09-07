import { resources } from "../data/resources";

const Resources = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center">
        Recursos
      </h1>
      <div className="space-y-8">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg border-l-4 border-teal-400 flex flex-col justify-between min-h-[200px]"
          >
            <p className="text-teal-200 text-2xl font-bold mb-3">
              {resource.title}
            </p>
            <p className="text-teal-400 text-xl font-medium mb-4 flex-grow">
              {resource.description}
            </p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-50 text-center text-xl bg-teal-700 py-2 px-4 rounded-lg hover:bg-teal-900 font-semibold transition-colors duration-300"
            >
              Ver recurso
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
