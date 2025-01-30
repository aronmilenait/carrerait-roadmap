"use client";

interface Answer {
  option: string;
  response: string | ((experience: string) => string);
}

interface Question {
  id?: string;
  question: string;
  dependsOn?: string;
  showIfWorkStatus?: string;
  answers: Answer[];
}

interface SurveyFormProps {
  questions: Question[];
  selectedAnswers: (number | null)[];
  onAnswerClick: (questionIndex: number, answerIndex: number) => void;
  error: string | null;
}

const AspirantSurveyForm = ({
  questions,
  selectedAnswers,
  onAnswerClick,
  error,
}: SurveyFormProps) => {
  const shouldAskAboutWorkingHours = (
    question: Question,
    selectedAnswers: (number | null)[]
  ) => {
    if (!question.dependsOn) {
      return true;
    }

    const dependencyQuestionIndex = questions.findIndex(
      (q) => q.id === question.dependsOn
    );

    if (
      dependencyQuestionIndex === -1 ||
      selectedAnswers[dependencyQuestionIndex] === null
    ) {
      return false;
    }

    const selectedAnswerIndex = selectedAnswers[dependencyQuestionIndex];

    if (selectedAnswerIndex === null) return false;

    const dependencyAnswer =
      questions[dependencyQuestionIndex].answers[selectedAnswerIndex].option;

    return dependencyAnswer === question.showIfWorkStatus;
  };

  return (
    <div>
      {questions.map((question, questionIndex) => {
        if (!shouldAskAboutWorkingHours(question, selectedAnswers)) {
          return null;
        }

        return (
          <div key={questionIndex} className="mb-12">
            <p className="text-xl text-center mb-4">{question.question}</p>
            <ul className="space-y-2">
              {question.answers.map((answer, answerIndex) => (
                <li key={answerIndex}>
                  <button
                    onClick={() => onAnswerClick(questionIndex, answerIndex)}
                    className={`py-2 px-4 rounded-lg w-full text-left ${
                      selectedAnswers[questionIndex] === answerIndex
                        ? "bg-teal-950 text-white font-semibold text-md"
                        : "bg-teal-800 text-white font-semibold text-md"
                    }`}
                    aria-pressed={
                      selectedAnswers[questionIndex] === answerIndex
                    }
                  >
                    {answer.option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      {error && (
        <div className="text-red-400 font-bold text-center mt-4">{error}</div>
      )}
    </div>
  );
};

export default AspirantSurveyForm;
