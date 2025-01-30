"use client";

import { useState } from "react";
import { aspirantQuestions } from "@/app/data/aspirantQuestions";
import AspirantSurveyForm from "./AspirantSurveyForm";
import AspirantSurveyResults from "./AspirantSurveyResults";

const AspirantSurvey = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(aspirantQuestions.length).fill(null)
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
    setIsFinished(true);
  };

  return (
    <section className="bg-grey-950 text-white space-y-8 py-10 px-4 max-w-2xl mx-auto rounded-lg">
      <div id="survey-div">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-teal-400 font-extrabold mb-6 text-center">
          Cuestionario
        </h1>
        {!isFinished ? (
          <>
            <AspirantSurveyForm
              questions={aspirantQuestions}
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
          <AspirantSurveyResults
            selectedAnswers={selectedAnswers}
            questions={aspirantQuestions}
          />
        )}
      </div>
    </section>
  );
};

export default AspirantSurvey;
