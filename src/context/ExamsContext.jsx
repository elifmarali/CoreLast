import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";
import authServices from "../services/authServices";

const ExamsContext = createContext();

export const ExamsProvider = ({ children }) => {
  const { currentUser, setCurrentUserPointsData } = useContext(AuthContext);
  const EXAMS_API_URL = "https://localhost:44309/api/exams/";
  const QUESTION_API_URL = "https://localhost:44309/api/question/";

  const [allExams, setAllExams] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionName, setQuestionName] = useState(null);
  const [examId, setExamId] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(null);
  const [questionLastIndex, setQuestionLastIndex] = useState(null);
  const [questionIdArray, setQuestionIdArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questionThis, setQuestionThis] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [modal, setModal] = useState(false);
  const [examStars, setExamStars] = useState({});

  useEffect(() => {
    if (examId !== null) {
      setAllExams([]);
      setQuestions([]);
      setQuestionName(null);
      setQuestionIndex(null);
      setQuestionLastIndex(null);
      setQuestionIdArray([]);
    }
  }, [examId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await authServices.getCurrentUserEnteredExams();
      setCurrentUserPointsData(response);
    };

    fetchData();
  }, [currentQuestion]);

  useEffect(() => {
    const fetchExamNames = async () => {
      try {
        const response = await axios.get(EXAMS_API_URL + "getAllExams");
        const exams = response.data.data;
        setAllExams(exams);
        fetchStars(exams); 
      } catch (err) {
        console.error("Error fetching exam names:", err.message);
      }
    };
    fetchExamNames();
  }, [examId]);

  const fetchStars = async (exams) => {
    const stars = {};
    await Promise.all(
      exams?.map(async (exam) => {
        if (exam.id) {
          try {
            const response = await axios.get(`https://localhost:44309/api/Exams/getVote?examId=${exam.id}`);
            stars[exam.id] = response.data.data || 0;

         
            setExamStars((prevStars) => ({
              ...prevStars,
              [exam.id]: response.data.data || 0,
            }));
          } catch (err) {
            stars[exam.id] = 0;
            setExamStars((prevStars) => ({
              ...prevStars,
              [exam.id]: 0,
            }));
          }
        }
      })
    );
  };

  const clickExam = async (id) => {
    if (currentUser) {
      setExamId(id);
  
      try {
        const indexResponse = await axios.get(EXAMS_API_URL + `getExamDetailsById?Id=${id}`);
        const questionData = indexResponse.data.data;
        if (questionData && questionData.length > 0) {
          const questionIds = questionData.map((question) => question.questions[0].id);
          setQuestionIdArray(questionIds);
          setQuestionIndex(questionIds[0]);
          setQuestionLastIndex(questionIds.length);
          setQuestionName(questionData[0].examName);
          setQuestionThis(true);
  
          const response = await axios.get(QUESTION_API_URL + `getQuestionDetailsByExamId?examId=${id}&questionId=${questionIds[0]}`);
          setQuestions(response.data.data);
        } else {
          console.error("Sınav detayları bulunamadı veya boş.");
        }
      } catch (err) {
        console.error("Sınav detayları getirilemedi", err);
      }
    }
  };
  

  const nextQuestion = async () => {
    try {
      const nextQuestionId = questionIdArray[currentQuestion];
      setQuestionIndex(nextQuestionId);
      const response = await axios.get(QUESTION_API_URL + `getQuestionDetailsByExamId?examId=${examId}&questionId=${nextQuestionId}`);
      setQuestions(response.data.data);
    } catch (err) {
      console.error("Error fetching next question:", err);
    }
  };

  const answerPost = async (examId, questionId, userAnswer, userId) => {
    debugger
    try {
      await axios.post(
        QUESTION_API_URL + `checkUserPointWithQuestion?examId=${examId}&questionId=${questionId}&userAnswer=${userAnswer}&userId=${userId}`,
        {
          examId: examId,
          questionId: questionId,
          userAnswer: userAnswer,
          userId: userId,
        }
      );
    } catch (err) {
      console.error("Error posting answer:", err);
    }
  };

  const assessmentMade = (examId, stars) => {
    axios.post(
      `https://localhost:44309/api/Exams/vote?examId=${examId}&vote=${stars}`,
      {
        examId,
        vote: stars,
      }
    ).then((response) => {
      return response.data;
    }).catch((err) => {
      console.error("Error submitting vote:", err);
    });
  };

  const sharedValuesAndMethods = {
    allExams,
    clickExam,
    setQuestionIndex,
    questionIndex,
    questions,
    questionLastIndex,
    questionName,
    examId,
    questionIdArray,
    nextQuestion,
    currentQuestion,
    setCurrentQuestion,
    questionThis,
    setQuestionThis,
    selectedAnswer,
    setSelectedAnswer,
    modal,
    setModal,
    answerPost,
    setQuestions,
    setQuestionName,
    setQuestionIndex,
    setQuestionLastIndex,
    setQuestionIdArray,
    setExamId,
    assessmentMade,
    examStars,
    fetchStars
  };

  return (
    <ExamsContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ExamsContext.Provider>
  );
};

export default ExamsContext;
