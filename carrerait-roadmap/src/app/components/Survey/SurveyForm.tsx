"use client";

interface Answer {
  option: string;
  response: string | ((experience: string) => string);
}

interface Question {
  question: string;
  answers: Answer[];
}

interface SurveyFormProps {
  questions: Question[];
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
                      ? "bg-teal-900 text-white border-2 border-teal-800 font-semibold"
                      : "bg-teal-700 text-white"
                  }`}
                  aria-pressed={selectedAnswers[questionIndex] === answerIndex}
                >
                  {answer.option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {error && (
        <div className="text-red-400 font-bold text-center mt-4">{error}</div>
      )}
    </div>
  );
};

export default SurveyForm;
