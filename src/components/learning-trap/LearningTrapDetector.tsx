import React, { useState, useMemo } from "react";
import { assessmentQuestions } from "../../data/learningTrapAssessment";
import AssessmentQuestion from "./AssessmentQuestion";
import Results from "./Results";
import "./LearningTrapDetector.css";

const LearningTrapDetector: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const allQuestions = useMemo(
    () => assessmentQuestions.flatMap((cat) => cat.questions),
    []
  );

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((total, answerIndex, questionIndex) => {
      const question = allQuestions[questionIndex];
      return total + question.scores[answerIndex];
    }, 0);
  };

  const handleRetake = () => {
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return <Results score={calculateScore()} onRetake={handleRetake} />;
  }

  const progress = Math.round(
    (currentQuestionIndex / allQuestions.length) * 100
  );

  return (
    <div className="learning-trap-detector">
      <h2>Learning Trap Detector</h2>
      <div className="assessment-progress-bar">
        <div style={{ width: `${progress}%` }} />
      </div>
      <AssessmentQuestion
        question={allQuestions[currentQuestionIndex]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default LearningTrapDetector;
