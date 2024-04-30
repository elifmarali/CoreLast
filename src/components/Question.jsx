import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExamsContext from "../context/ExamsContext";
import "./Question.css";
import { useNavigate, useParams } from "react-router-dom";

function Question() {
  const { questionID, examID } = useParams();
  const navigate = useNavigate();
  const {
    questionName,
    questions,
    questionLastIndex,
    nextQuestion,
    currentQuestion,
    setCurrentQuestion,
    setQuestionThis,
    examId,
    questionIndex,
    questionIdArray,
    questionThis,
    selectedAnswer,
    setSelectedAnswer,
    currentUserId,
    answerPost,
    setAllExams,
    setQuestions,
    setQuestionName,
    setQuestionIndex,
    setQuestionLastIndex,
    setQuestionIdArray
  } = useContext(ExamsContext);
  const [minute, setMinute] = useState(40);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minute > 0) {
        if (second > 0) {
          setSecond(second - 1);
        } else if (second === 0) {
          setMinute(minute - 1);
          setSecond(59);
        }
      } else if (minute === 0) {
        if (second > 0) {
          setSecond(second - 1);
        } else {
          clearInterval(interval);
          navigate(`/result/${currentUserId}/${questionName}`);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [minute, second, navigate]);

  useEffect(() => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square, index) => {
      if (index + 1 === currentQuestion) {
        square.style.backgroundColor = "#d9376e";
        square.style.fontSize = "18px";
      }
    });
  }, [selectedAnswer]);

  useEffect(() => {
    const buttons = document.querySelectorAll(".questionOption");
    buttons.forEach((button, index) => {
      if (button.value === selectedAnswer) {
        button.classList.add("questionOptionClick");
      } else {
        button.classList.remove("questionOptionClick");
      }
    });
  }, [selectedAnswer]);

  useEffect(() => {
    navigate(`/question/${examId}/${questionIndex}`);
  }, [currentQuestion, examId, questionIndex, navigate]);

  const handleClickNextQuestion = () => {
    answerPost(examId, questionIndex, selectedAnswer, currentUserId);
    if (selectedAnswer === null || selectedAnswer === undefined) {
      console.error("HATA: Bir şık seçilmedi!");
      toast.error("Lütfen bir şık seçin!");
      return;
    }
    if (currentQuestion + 1 < questionIdArray.length) {
      setCurrentQuestion((prev) => prev + 1);
      setQuestionThis(true);
      nextQuestion();
      setSelectedAnswer(null);
    } else if (currentQuestion + 1 === questionIdArray.length) {
      setCurrentQuestion((prev) => prev + 1);
      setQuestionThis(false);
      nextQuestion();
      setSelectedAnswer(null);
    } else {
      console.error("HATA: Beklenmeyen durum!");
    }
  };

  const handleClickQuizFinish = () => {
    answerPost(examId, questionIndex, selectedAnswer, currentUserId);
    setMinute(0);
    setSecond(0);
    navigate(`/result/${currentUserId}/${questionName}`);
    setCurrentQuestion(1);
setQuestionThis(null);
  };
  

  return (
    <div className="questionContainer">
      <ToastContainer />
      <div className="questionHeaderAndTimer">
        <h3 className="questionHeader">
          {questionName} {currentQuestion} \ {questionLastIndex}
        </h3>
        <div className="timeSection">
          {minute >= 10 ? minute : `0${minute}`}:{second >= 10 ? second : `0${second}`}
        </div>
      </div>
      <div className="questionSectionContainer">
        <div className="questionLeftSection">
          <div className="questionText">{questions?.questionText}</div>
          <div className="answerOptions">
            <button
              className="questionOption"
              value={questions?.answer1}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions?.answer1}
            </button>
            <button
              className="questionOption"
              value={questions?.answer2}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions?.answer2}
            </button>
            <button
              className="questionOption"
              value={questions?.answer3}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions?.answer3}
            </button>
            <button
              className="questionOption"
              value={questions?.answer4}
              onClick={(e) => {
                setSelectedAnswer(e.target.value);
              }}
            >
              {questions?.answer4}
            </button>
          </div>
        </div>
        <div className="questionRightSection">
          {Array.from({ length: questionLastIndex }, (_, index) => (
            <div key={index} className="square">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      {questionThis ? (
        <button
          className="nextQuestionButton"
          onClick={() => handleClickNextQuestion()}
        >
          Sonraki Soru
        </button>
      ) : (
        <button className="nextQuestionButton" onClick={handleClickQuizFinish}>
          Sinavi Bitir
        </button>
      )}
    </div>
  );
}

export default Question;
