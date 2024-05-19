import React, { useContext } from "react";
import Header from "./Header";
import ExamsContext from "../context/ExamsContext";
import "./ExamsPage.css";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"; // Import regularStar icon

function ExamsPage() {
  const navigate = useNavigate();
  const { allExams, clickExam, setCurrentQuestion, currentUserId, setExamId, setQuestionName, examStars, fetchStars } = useContext(ExamsContext);
  const { currentUser, currentUserPointsData } = useContext(AuthContext);

  const handleClickExam = async (exam, examId) => {
    if (currentUser) {
      const { examName } = exam;
      if (currentUserPointsData && currentUserPointsData[examName] !== undefined) {
        setExamId(examId);
        setQuestionName(examName);
        navigate(`/result/${currentUserId}/${examName}`);
      } else {
        setExamId(examId);
        setQuestionName(examName);
        await clickExam(examId);
        navigate("/questionInfo");
      }
    } else {
      navigate("/login");
    }
  };

  const renderStars = (examId) => {
    const starCount = examStars[examId] || 0;

    if (starCount === 0) {
      return <p>Henüz değerlendirme yapılmamıştır</p>;
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= starCount ? "star selected" : "star"}>
          <FontAwesomeIcon icon={regularStar} />
        </span>
      );
    }
    return <div style={{ display: "flex" }}>{stars}</div>;
  };

  return (
    <div className="examsContainer">
      <Header />
     <div className="exams">
     {allExams !== null && allExams !== undefined ? (
        allExams.map((exam) => (
          <div key={exam.id} className="examItem">
            <button
              className="exam"
              onClick={() => {
                handleClickExam(exam, exam.id);
              }}
            >
              <div>{exam.examName}</div>
              <div className="examStars">
              {renderStars(exam.id)}
            </div>
            </button>

          </div>
        ))
      ) : (
        <div>Yükleniyor...</div>
      )}
     </div>
    </div>
  );
}

export default ExamsPage;
