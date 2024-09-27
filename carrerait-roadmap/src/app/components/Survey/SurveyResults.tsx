interface Answer {
  option: string;
  response: string | ((experience: string) => string);
}

interface Question {
  question: string;
  answers: Answer[];
}

interface SurveyResultsProps {
  selectedAnswers: (number | null)[];
  questions: Question[];
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
                {typeof questions[questionIndex].answers[answerIndex]
                  .response === "function"
                  ? questions[questionIndex].answers[answerIndex].response(
                      "some experience value"
                    )
                  : questions[questionIndex].answers[answerIndex].response}
              </p>
            );
          }
          return null;
        })}
      </div>
      <div className="text-center mt-8 bg-teal-700 rounded-lg p-4">
        <p className="text-white text-lg font-bold">
          ¡Espero que estas respuestas te hayan sido útiles! <br />
        </p>
        <p className="mb-4 mt-4 text-white text-lg font-medium">
          Además de los cuestionarios, en CarreraIT tenés acceso a recursos
          gratuitos y guías de orientación. Y si querés saber más acerca del
          proyecto, podés acceder a la sección de información.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/orientacion"
            className="bg-teal-900 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-950 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Orientación
          </a>
          <a
            href="/recursos"
            className="bg-teal-900 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-950 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Recursos
          </a>
          <a
            href="/info"
            className="bg-teal-900 text-gray-100 py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-950 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
          >
            Información
          </a>
        </div>
      </div>
    </div>
  );
};

export default SurveyResults;
