import React from "react";
import { questionsData } from "../survey/questionsData";

interface SurveyResultsProps {
  selectedAnswers: (number | null)[];
  questions: typeof questionsData;
}

const SurveyResults = ({ selectedAnswers, questions }: SurveyResultsProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl text-center font-bold mb-4 mt-8">Resultados</h2>
      <div className="flex flex-col">
        {selectedAnswers.map((answerIndex, questionIndex) => {
          if (answerIndex !== null) {
            return (
              <p
                key={questionIndex}
                className="text-white text-lg p-2 rounded-lg"
              >
                {questions[questionIndex].answers[answerIndex].response}
              </p>
            );
          }
          return null;
        })}
      </div>
      <div className="text-center mt-8 bg-sky-600 rounded-lg p-4">
        <p className="text-white text-lg">
          ¡Espero que estas respuestas te hayan sido útiles! <br />
          En CarreraIT, también tenemos{" "}
          <b>
            <a href="/guias" className="font-bold hover:underline">
              guías de orientación
            </a>
          </b>{" "}
          para que puedas evaluar otras cuestiones e informarte. Además, podés
          visitar nuestra sección de{" "}
          <b>
            <a href="/contacto" className="font-bold hover:underline">
              contacto
            </a>
          </b>{" "}
          si tenés alguna duda o sugerencia e{" "}
          <b>
            <a href="/informacion" className="font-bold hover:underline">
              información
            </a>
          </b>{" "}
          para conocer más acerca del proyecto.
        </p>
      </div>
    </div>
  );
};

export default SurveyResults;
