"use client";

import { useState } from "react";
import { resources } from "../data/resources";

const Resources = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicSelection = (topic: string | null) => {
    setSelectedTopic(topic);
  };

  const filteredResources = selectedTopic
    ? resources.filter((resource) => resource.topic.includes(selectedTopic))
    : resources;

  const specificTopics = Array.from(
    new Set(resources.flatMap((resource) => resource.topic))
  );

  return (
    <section className="bg-gray-900 text-white py-10 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-3xl md:text-5xl text-teal-400 font-extrabold mb-8 text-center">
        Recursos
      </h1>
      <p className="text-2xl font-bold mb-8 text-center">
        Todos son gratuitos y de excelente calidad.
      </p>
      <div className="mb-8 text-center flex flex-col justify-between">
        <label
          htmlFor="topic-select"
          className="text-lg font-semibold text-teal-300 mr-2"
        >
          Filtrar por:
        </label>
        <select
          id="topic-select"
          onChange={(e) =>
            handleTopicSelection(
              e.target.value === "Todos" ? null : e.target.value
            )
          }
          className="py-2 px-4 text-center rounded-md bg-teal-600 text-white"
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
      <div className="space-y-8">
        {filteredResources.map((resource, index) => (
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
