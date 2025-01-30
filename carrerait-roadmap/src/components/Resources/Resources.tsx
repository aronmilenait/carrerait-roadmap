"use client";

import { useState } from "react";
import { resources } from "../../data/resources/resources";
import { Filter, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const Resources = () => {
  const resourcesPerPage = 12;
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleTopicSelection = (topic: string | null) => {
    setSelectedTopic(topic);
    setCurrentPage(0);
  };

  const filteredResources = selectedTopic
    ? resources
        .filter((resource) => resource.topic.includes(selectedTopic))
        .sort((a, b) => a.title.localeCompare(b.title))
    : resources.sort((a, b) => a.title.localeCompare(b.title));

  const specificTopics = Array.from(
    new Set(resources.flatMap((resource) => resource.topic))
  ).sort((a, b) => a.localeCompare(b));

  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);
  
  const currentResources = filteredResources.slice(
    currentPage * resourcesPerPage,
    (currentPage + 1) * resourcesPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalResources = filteredResources.length;
  const startIndex = currentPage * resourcesPerPage + 1;
  const endIndex = Math.min((currentPage + 1) * resourcesPerPage, totalResources);

  return (
    <section className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center">
          Recursos
        </h1>
        <p className="text-xl md:text-2xl font-bold mb-8 text-center">
          Todos son gratuitos y de excelente calidad.
        </p>
        <div className="mb-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <label
            htmlFor="topic-select"
            className="text-lg font-semibold text-teal-300 flex items-center gap-2"
          >
            <Filter size={20} />
            Filtrar por:
          </label>
          <select
            id="topic-select"
            onChange={(e) =>
              handleTopicSelection(
                e.target.value === "Todos" ? null : e.target.value
              )
            }
            className="w-64 p-2 rounded-md bg-gray-800 text-white shadow-lg border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            value={selectedTopic || "Todos"}
          >
            <option value="Todos">Todos</option>
            {specificTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center mb-8">
          {selectedTopic && (
            <p className="text-teal-300 text-lg mb-2">
              Filtrando por: <span className="font-semibold">{selectedTopic}</span>
            </p>
          )}
          <p className="text-gray-300">
            Mostrando {startIndex}-{endIndex} de {totalResources} resultados
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {currentResources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 hover:bg-gray-750 transition-all duration-300 ease-out transform hover:scale-105 hover:border-teal-500 flex flex-col items-start justify-between min-h-[200px]"
            >
              <div>
                <p className="text-teal-300 text-xl font-bold mb-3 flex items-center gap-2">
                  {resource.title}
                </p>
                <p className="text-gray-300 text-base">
                  {resource.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                <span className="mr-2">Ver recurso</span>
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="p-2 rounded-md bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-750 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-300 ${
                    currentPage === index
                      ? "bg-teal-500 text-white"
                      : "bg-gray-800 text-white hover:bg-gray-750"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-md bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-750 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resources;
