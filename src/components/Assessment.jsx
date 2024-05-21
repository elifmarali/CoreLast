import React, { useContext, useEffect, useState } from "react";
import "./Assessment.css";
import LessonsContext from "../context/LessonsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ExamsContext from "../context/ExamsContext";
import AuthContext from "../context/AuthContext";
import ThemeContext from "../context/ThemeContext";

function Assessment() {
  const {
    selectedLessonInfo,
    assessmentMade: lessonAssessmentMade,
    selectedStars,
    setSelectedStars,
  } = useContext(LessonsContext);
  const { questionName, assessmentMade: examAssessmentMade, examId,fetchStars,exams } = useContext(ExamsContext);
  const { isExams } = useContext(AuthContext);
  const[click,setClick]=useState(true);
  const {theme}=useContext(ThemeContext);

  const nav = useNavigate();

  useEffect(()=>{setSelectedStars(0)},[examId]);
  const handleStarClick = (starCount) => {
    setSelectedStars(starCount);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= selectedStars ? "star selected" : "star"}
          onClick={() => handleStarClick(i)}
        >
          <FontAwesomeIcon icon={regularStar} />
        </span>
      );
    }
    return stars;
  };

  const handleAssessment = () => {
    setClick(false);
    if (isExams) {
      examAssessmentMade(examId, selectedStars);
      fetchStars(exams);
    } else {
      lessonAssessmentMade(selectedStars);
    }
    toast.success("Değerlendirmeniz için teşekkür ederiz.");
    setTimeout(() => {
      nav("/");
      setClick(true);
      setSelectedStars(0);
    }, 3000);
  };

  return (
    <main className={`assessmentMain ${theme==="dark" ? theme : ""}`}>
      <ToastContainer />
      <section className="assessmentSection">
        <div className="assessmentHeader">
          {isExams ? `${questionName} Sınavı` : `${selectedLessonInfo?.contentName} Eğitimi`}
        </div>
        <div className="starsContainer">{renderStars()}</div>
        <div className="assessmentButtonContainer">
          <button onClick={() => nav("/")} className="backHomeButton">
            Ana Sayfaya Geri Dön
          </button>
          <button className="assesmentButton" onClick={handleAssessment} disabled={!click}>
            Değerlendir
          </button>
        </div>
      </section>
    </main>
  );
}

export default Assessment;
