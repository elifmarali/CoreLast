import React, { useContext } from "react";
import Header from "./Header";
import ExamsContext from "../context/ExamsContext";
import "./ExamsPage.css";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ExamsPage() {
  const navigate = useNavigate();
  const { allExams, clickExam, setCurrentQuestion, currentUserId } =
    useContext(ExamsContext);
  const { currentUser, currentUserPointsData } = useContext(AuthContext);

  const handleClickExam = (exam, examId) => {
    if (currentUser) {
      const { examName } = exam;
      if (
        currentUserPointsData &&
        currentUserPointsData[examName] !== undefined
      ) {
        navigate(`/result/${currentUserId}/${examName}`);
      } else {
        clickExam(examId);
        navigate("/questionInfo");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="examsContainer">
      <Header />
      {allExams !== null && allExams !== undefined ? (
        allExams.map((exam) => (
          <button
            className="exam"
            key={exam.id}
            onClick={() => {
              handleClickExam(exam, exam.id);
            }}
          >
            {exam.examName}{" "}
          </button>
        ))
      ) : (
        <div>Yükleniyor...</div>
      )}
    </div>
  );
}

export default ExamsPage;
