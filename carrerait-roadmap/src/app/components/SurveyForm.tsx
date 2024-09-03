"use client";
import { questionsData } from "../survey/questionsData";

interface SurveyFormProps {
  questions: typeof questionsData;
  selectedAnswers: (number | null)[];
  onAnswerClick: (questionIndex: number, answerIndex: number) => void;
  error: string | null;
}

const SurveyForm = ({
  questions,
  selectedAnswers,
  onAnswerClick,
  error,
}: SurveyFormProps) => {
  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <p className="text-xl mb-4">{question.question}</p>
          <ul className="space-y-2">
            {question.answers.map((answer, answerIndex) => (
              <li key={answerIndex}>
                <button
                  onClick={() => onAnswerClick(questionIndex, answerIndex)}
                  className={`py-2 px-4 rounded-lg w-full text-left ${
                    selectedAnswers[questionIndex] === answerIndex
                      ? "bg-sky-300 text-black border-2 border-sky-500" 
                      : "bg-sky-700 text-white"
                  }`}
                  aria-pressed={selectedAnswers[questionIndex] === answerIndex}
                >
                  {answer.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {error && <div className="text-red-400 font-bold text-center mt-4">{error}</div>}
    </div>
  );
};

export default SurveyForm;
