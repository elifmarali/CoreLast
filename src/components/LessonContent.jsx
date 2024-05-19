import React, { useContext, useEffect, useState } from "react";
import LessonsContext from "../context/LessonsContext";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./LessonContent.css";
import { FaCaretRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"; // Import regularStar icon
import AuthContext from "../context/AuthContext";

function LessonContent() {
  const {
    selectedLesson,
    selectedLessonInfo,
    setSelectedLesson,
    time,
    star,
    getStar,
  } = useContext(LessonsContext);
  const {setIsExams}=useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const { educationId } = useParams();
  const [editedUrl, setEditedUrl] = useState();
  const [active, setActive] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (selectedLessonInfo && selectedLessonInfo.videoUrl) {
      const videoId = selectedLessonInfo?.videoUrl.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
      )[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?si=okDGIm8l9L8XQHil`;
      setEditedUrl(embedUrl);
    }
  }, [selectedLessonInfo]);

  useEffect(() => {
    setSelectedLesson(educationId);
    getStar(selectedLesson);
    setIsExams(false);
  }, [educationId]);

  useEffect(() => {
    setLoading(selectedLesson === undefined);
  }, [selectedLesson]);

  useEffect(() => {
    if (time !== undefined) {
      const timeout = setTimeout(() => {
        setActive(true);
      }, time);

      return () => clearTimeout(timeout); 
    }
  }, [time]);

  const lessonComplatedClick = (educationId) => {
    if (active) {
      setIsExams(false);
      nav(`/assessment/${educationId}`);
    } else {
      toast.error(
        "Eğitimi değerlendirebilmeniz için en az eğitimdeki video içeriği kadar zaman geçirmiş olmalısınız."
      );
    }
  };

  const renderStars = () => {
    if (star === 0) {
      return <p>Henüz değerlendirme yapılmamıştır</p>;
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= star ? "star selected" : "star"}>
          <FontAwesomeIcon icon={regularStar}  />
        </span>
      );
    }
    return <div style={{ display: "flex" }}>{stars}</div>;
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="lessonContent">
            <h1 className="contentHeader">{selectedLessonInfo?.contentName}</h1>
            <div className="contentMain">
              <div className="contentMainTop">
                <h3 className="contentMainHead">
                  {selectedLessonInfo?.educationName}
                </h3>
                <div className="stars" style={{ display: "flex" }}>
                  {renderStars()}
                </div>
              </div>
              <div className="videoContainer">
                <iframe src={editedUrl} className="video"></iframe>
              </div>
              <div className="contentText">
                <div className="firstTenSentences contentLessonText">
                  {selectedLessonInfo?.educationDescription
                    .split(".")
                    .slice(0, 7)
                    .join(".") + "."}
                </div>
                <img
                  src={selectedLessonInfo?.contentImageUrl}
                  alt=""
                  className="contentImage"
                />
              </div>
              <div className="remainingText contentLessonText">
                {selectedLessonInfo?.educationDescription
                  .split(".")
                  .slice(7)
                  .join(".")}
              </div>
            </div>
            <div className="lessonButtonContainer">
              <button
                className="contentLessonButton"
                style={{
                  backgroundColor: active ? "#ff8e3c" : "lightgray",
                  cursor: active ? "pointer" : "default",
                }}
                onClick={() => lessonComplatedClick(educationId)}
              >
                Eğitim Tamamlandı{" "}
                <FaCaretRight
                  style={{
                    color: active ? "#d9376e" : "black",
                    transform: active ? "" : "none",
                  }}
                  className="contentLessonIcon"
                />
              </button>
            </div>
          </div>
        )}
      </>
      <Footer />
    </>
  );
}

export default LessonContent;
