import React, { useState } from "react";

const quizData = [
  {
    id: 1,
    question: "What is the primary source of energy for the Earth?",
    answers: [
      { answer: "Wind", isCorrect: false },
      { answer: "Solar energy", isCorrect: true },
      { answer: "Geothermal energy", isCorrect: false },
      { answer: "Nuclear energy", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which fossil fuel is most commonly used for electricity generation?",
    answers: [
      { answer: "Natural gas", isCorrect: false },
      { answer: "Coal", isCorrect: true },
      { answer: "Oil", isCorrect: false },
      { answer: "Biomass", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Which form of energy is considered renewable?",
    answers: [
      { answer: "Wind energy", isCorrect: true },
      { answer: "Coal energy", isCorrect: false },
      { answer: "Nuclear energy", isCorrect: false },
      { answer: "Oil energy", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What unit is used to measure energy consumption?",
    answers: [
      { answer: "Watts", isCorrect: false },
      { answer: "Kilowatt-hours", isCorrect: true },
      { answer: "Amperes", isCorrect: false },
      { answer: "Volts", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is the purpose of an energy audit?",
    answers: [
      { answer: "To measure solar energy", isCorrect: false },
      { answer: "To improve energy efficiency", isCorrect: true },
      { answer: "To calculate carbon emissions", isCorrect: false },
      { answer: "To monitor water usage", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Which renewable energy source uses moving water to generate electricity?",
    answers: [
      { answer: "Hydropower", isCorrect: true },
      { answer: "Wind energy", isCorrect: false },
      { answer: "Geothermal energy", isCorrect: false },
      { answer: "Nuclear energy", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What type of energy does a solar panel convert into electricity?",
    answers: [
      { answer: "Chemical energy", isCorrect: false },
      { answer: "Thermal energy", isCorrect: false },
      { answer: "Light energy", isCorrect: true },
      { answer: "Kinetic energy", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "What is the main component of natural gas?",
    answers: [
      { answer: "Methane", isCorrect: true },
      { answer: "Carbon dioxide", isCorrect: false },
      { answer: "Hydrogen", isCorrect: false },
      { answer: "Oxygen", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Which sector uses the most energy globally?",
    answers: [
      { answer: "Transportation", isCorrect: false },
      { answer: "Industry", isCorrect: true },
      { answer: "Residential", isCorrect: false },
      { answer: "Agriculture", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "What does 'LED' stand for in energy-efficient lighting?",
    answers: [
      { answer: "Light Energy Device", isCorrect: false },
      { answer: "Light Emitting Diode", isCorrect: true },
      { answer: "Low Energy Display", isCorrect: false },
      { answer: "Light Enhancement Device", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerSelection = (index, isCorrect) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === quizData.length - 1) {
      setShowScore(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getAnswerButtonClass = (index) => {
    if (!isAnswered) return "hover:bg-blue-100";
    if (index === selectedAnswer) {
      return quizData[currentIndex].answers[index].isCorrect
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700";
    }
    if (quizData[currentIndex].answers[index].isCorrect && isAnswered) {
      return "bg-green-100 text-green-700";
    }
    return "opacity-50";
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
          <div className="text-center space-y-6">
            <div className="text-yellow-500 text-6xl mb-4">🏆</div>
            <h1 className="text-3xl font-bold text-gray-900">
              Energy Quiz Complete!
            </h1>
            <div className="space-y-2">
              <p className="text-xl text-gray-700">
                You scored {score} out of {quizData.length}
              </p>
              <p className="text-lg text-gray-600">
                ({Math.round((score / quizData.length) * 100)}% correct)
              </p>
            </div>
            <div className="pt-4">
              <p className="text-gray-500">
                Correct Answers: {score}
                <br />
                Wrong Answers: {quizData.length - score}
              </p>
              <button
                onClick={handleRestartQuiz}
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / quizData.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">
              Energy Quiz - Question {currentIndex + 1}/{quizData.length}
            </h2>
            <span className="text-sm text-gray-500">Score: {score}</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="py-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {quizData[currentIndex].question}
            </h3>

            <div className="space-y-3">
              {quizData[currentIndex].answers.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(index, option.isCorrect)}
                  disabled={isAnswered}
                  className={`w-full p-4 text-left rounded-lg border-2 border-gray-200 
                    transition-all duration-200
                    ${getAnswerButtonClass(index)}
                    ${!isAnswered && "hover:border-blue-500"}
                    disabled:cursor-not-allowed`}
                >
                  {option.answer}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`w-full py-3 rounded-lg transition-colors
              ${
                isAnswered
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            {currentIndex === quizData.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
