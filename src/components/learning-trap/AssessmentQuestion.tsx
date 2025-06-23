import React from "react";

interface Question {
  text: string;
  options: string[];
}

interface AssessmentQuestionProps {
  question: Question;
  onAnswer: (optionIndex: number) => void;
}

const AssessmentQuestion: React.FC<AssessmentQuestionProps> = ({
  question,
  onAnswer,
}) => {
  return (
    <div className="assessment-question">
      <h4>{question.text}</h4>
      <div className="options-group">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssessmentQuestion;
