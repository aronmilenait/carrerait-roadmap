"use client";

import { useState } from "react";
import { questionsData } from "../survey/questionsData";
import SurveyForm from "./SurveyForm";
import SurveyResults from "./SurveyResults";

const Survey = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questionsData.length).fill(null)
  );
  const [isFinished, setIsFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswerClick = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
    if (error) {
      setError(null);
    }
  };

  const handleFinishClick = () => {
    const allAnswered = selectedAnswers.every((answer) => answer !== null);
    if (allAnswered) {
      setIsFinished(true);
    } else {
      setError(
        "Respondé a todas las preguntas antes de hacer click en finalizar :)"
      );
    }
  };

  return (
    <section className="bg-grey-950 text-white space-y-8 py-10 px-4 max-w-2xl mx-auto rounded-lg">
      <div id="survey-div">
        <h1 className="text-teal-400 text-4xl font-bold mb-6 text-center">Cuestionario</h1>
        {!isFinished ? (
          <>
            <SurveyForm
              questions={questionsData}
              selectedAnswers={selectedAnswers}
              onAnswerClick={handleAnswerClick}
              error={error}
            />
            <button
              onClick={handleFinishClick}
              className="mt-8 bg-teal-800 py-2 px-4 rounded-lg text-lg font-semibold hover:bg-teal-900 transition duration-300 w-full"
            >
              Finalizar
            </button>
          </>
        ) : (
          <SurveyResults
            selectedAnswers={selectedAnswers}
            questions={questionsData}
          />
        )}
      </div>
    </section>
  );
};

export default Survey;
