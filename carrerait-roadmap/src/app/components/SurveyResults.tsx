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
      <div className="space-y-4">
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
    </div>
  );
};

export default SurveyResults;
