import { useState } from "react";
import QuizData from "./QuizData";

let Quiz = () => {
  let [index, setIndex] = useState(0);
  let [disable, setDisable] = useState(false);
  let [correct, setCorrect] = useState(0);
  let [showScore, setShowScore] = useState(false);
  let [selectedAnswer, setSelectedAnswer] = useState(null);
  let[btnDisable,setBtnDisable]=useState(false)

  let handleAnswerOptions = (index, isCorrect) => {
    setDisable(true);
    setCorrect((prevCorrect) => prevCorrect + 1);
    setSelectedAnswer(index);
    setBtnDisable((prevBtn)=>!prevBtn)
  };

  let handleNextQuestion = () => {
    if (index === QuizData.length-1) {
      setShowScore(true);
    }
    else{
      setDisable(false);
      setIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setBtnDisable((prevBtn)=>!prevBtn)
    }
  
  };


  return (
    <>
      <div className="container font-Nunito h-[100vh] w-full flex justify-center items-center">
        <div className="quizBox h-[78vh] w-[60vw] bg-blue-300 rounded">
          <h1 className="text-3xl font-MontserratBold font-semibold text-center p-2 my-3">
            QUIZ
          </h1>
          {showScore ? (
           <>
          <div className="score flex justify-center items-center flex-col my-20">
          <h1 className="text-2xl font-semibold text-white font-serif">Thank you for playing</h1>
           <h1 className="text-xl text-center ">Correct : {correct}</h1>
           <h1 className="text-xl text-center">Wrong: {QuizData.length-correct}</h1>
          </div>
           </>
          ) : (
            <div className="main">
              <div className="question">
                <h1 className="text-2xl px-5">{QuizData[index].question}</h1>
              </div>
              <div className="answers p-2">
                {QuizData[index].answers.map((option, index) => {
                  return (
                    <button
                    disabled={btnDisable}
                      key={index}
                      className={`p-2 block border-2 border-white w-[90%] rounded-[100px] mx-auto my-3 text-xl ${selectedAnswer===index ? option.isCorrect ? 'bg-green-500 ':'bg-red-500' :''}`}
                      onClick={() => {
                        handleAnswerOptions(index, option.isCorrect);
                      }}
                    >
                      {option.answer}
                    </button>
                  );
                })}
              </div>
              <div className="nextQuestion">
                <button
                  className={`${
                    disable ? "bg-green-400" : "bg-green-300"
                  } text-xl w-[90%] rounded-md  p-2 m-auto block font-serif cursor-pointer `}
                  onClick={handleNextQuestion}
                  disabled={!disable}
                >
                  Next Question
                </button>
              </div>
              <h3 className="text-center p-3 text-lg">
                Question {index + 1} of {QuizData.length}{" "}
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
