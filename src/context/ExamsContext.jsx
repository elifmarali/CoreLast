import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import AuthService from "../services/authServices"; // AuthService'ı ekleyin

const ExamsContext = createContext();

export const ExamsProvider = ({ children }) => {
  const { currentUser, currentUserId, setCurrentUserPointsData } = useContext(AuthContext);
  const EXAMS_API_URL = "https://localhost:44309/api/exams/";
  const QUESTION_API_URL = "https://localhost:44309/api/question/";

  const [allExams, setAllExams] = useState(); // Tüm sınavların listesi
  const [questions, setQuestions] = useState(); // Seçilen sınavın ilk sorusu
  const [questionName, setQuestionName] = useState(); // Seçilen sınavın adı
  const [examId, setExamId] = useState(); // Seçilen sınavın ID'si
  const [questionIndex, setQuestionIndex] = useState(); // Seçilen sınavın ilk sorusunun ID'si
  const [questionLastIndex, setQuestionLastIndex] = useState(); // Seçilen sınavın içinde kaç soru bulunduğu
  const [questionIdArray, setQuestionIdArray] = useState([]); // Seçilen sınavın içindeki soruların ID'lerini tutan array
  const [currentQuestion, setCurrentQuestion] = useState(1); // currentQuestion'ı ekledim
  const [questionThis, setQuestionThis] = useState(true); // setQuestionThis ekledim
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Sınavda seçilen şık
  const [modal, setModal] = useState(false); // Sonuç ekranı gösterilsin mi?

  useEffect(() => {
    if (examId !== null) {
      setAllExams(null);
      setQuestions(null);
      setQuestionName(null);
      setQuestionIndex(null);
      setQuestionLastIndex(null);
      setQuestionIdArray([]);
    }
  }, [examId]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AuthService.getCurrentUserEnteredExams();
      setCurrentUserPointsData(response);
    };

    fetchData();
  }, [currentQuestion]);

  useEffect(() => {
    const fetchExamNames = async () => {
      try {
        const response = await axios.get(EXAMS_API_URL + "getAllExams");
        setAllExams(response.data.data);
      } catch (err) {
        console.log(err);
        console.log(err.message);
      }
    };
    fetchExamNames();
  }, [examId]);

  const clickExam = async (id) => {
    if (currentUser) {
      setExamId(id);
      try {
        const indexResponse = await axios.get(
          EXAMS_API_URL + `getExamDetailsById?Id=${id}`
        );

        const questionIds = indexResponse.data.data.map(
          (question) => question.questions[0].id
        );
        setQuestionIdArray(questionIds);
        setQuestionIndex(questionIds[0]);
        setQuestionLastIndex(questionIds.length);
        setQuestionName(indexResponse.data.data[0].examName);
        setQuestionThis(true);

        const response = await axios.get(
          QUESTION_API_URL +
            `getQuestionDetailsByExamId?examId=${id}&questionId=${questionIds[0]}`
        );
        setQuestions(response.data.data);
      } catch (err) {
        console.log("Sınav detayları getirilemedi", err);
      }
    }
  };

  const nextQuestion = async () => {
    try {
      const nextQuestionId = questionIdArray[currentQuestion];
      setQuestionIndex(nextQuestionId);
      const response = await axios.get(
        QUESTION_API_URL +
          `getQuestionDetailsByExamId?examId=${examId}&questionId=${nextQuestionId}`
      );
      setQuestions(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const answerPost = async (examId, questionId, userAnswer, userId) => {
    try {
      const response = await axios.post(
        QUESTION_API_URL +
          `checkUserPointWithQuestion?examId=${examId}&questionId=${questionId}&userAnswer=${userAnswer}&userId=${userId}`,
        {
          examId: examId,
          questionId: questionId,
          userAnswer: userAnswer,
          userId: userId,
        }
      );
    } catch (err) {
      console.log(err);
    }
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
    currentUserId,
    answerPost,
    setQuestions,
    setQuestionName,
    setQuestionIndex,
    setQuestionLastIndex,
    setQuestionIdArray
  };

  return (
    <ExamsContext.Provider value={sharedValuesAndMethods}>
      {children}
    </ExamsContext.Provider>
  );
};

export default ExamsContext;
