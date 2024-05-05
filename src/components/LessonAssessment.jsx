import React, { useContext, useState } from "react";
import "./LessonAssessment.css";
import LessonsContext from "../context/LessonsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import star from "../svg/star.svg"
function LessonAssessment() {
  const { selectedLessonInfo, assessmentMade,selectedStars, setSelectedStars } = useContext(LessonsContext);
  const nav = useNavigate();
  const handleStarClick = (starCount) => {
    setSelectedStars(starCount);
    // Burada seçilen yıldıza göre yapılacak işlemleri gerçekleştirebilirsiniz.
    console.log("Seçilen yıldız sayısı:", starCount);
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

  const clickAssessment = () => {
    assessmentMade(selectedStars);
    toast.success(
      "Degerlendirmeniz için teşekkür ederiz."
    );
    setTimeout(() => {
      nav("/");
      setSelectedStars(0)
    }, 3000);
  };

  return (
    <main className="assessmentMain">
      <ToastContainer />

      <section className="assessmentSection">
        <div className="assessmentHeader">
          {selectedLessonInfo?.contentName} Sınavı
        </div>
        <div className="starsContainer">{renderStars()}</div>
        <div className="assessmentButtonContainer">
          <button onClick={() => navigate("/")} className="backHomeButton">
            Ana Sayfaya Geri Dön
          </button>
          <button className="assesmentButton" onClick={() => clickAssessment()}>
            Değerlendir
          </button>
        </div>
      </section>
    </main>
  );
}

export default LessonAssessment;
