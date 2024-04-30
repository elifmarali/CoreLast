import React, { useContext, useEffect, useState } from "react";
import LessonsContext from "../context/LessonsContext";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./LessonContent.css";
import { FaCaretRight } from "react-icons/fa";

function LessonContent() {
  const { selectedLesson, selectedLessonInfo, setSelectedLesson } =
    useContext(LessonsContext);
  const [loading, setLoading] = useState(true);
  const { educationId } = useParams();

  useEffect(() => {
    setSelectedLesson(educationId);
  }, []);

  useEffect(() => {
    if (selectedLesson !== undefined) {
      setLoading(false);
    }
  }, [selectedLesson]);

  console.log(selectedLessonInfo);

  const firstTenSentences =
    selectedLessonInfo?.educationDescription.split(".").slice(0, 7).join(".") +
    ".";

  const remainingText = selectedLessonInfo?.educationDescription
    .split(".")
    .slice(7)
    .join(".");

  return (
    <>
      <Header />
      <>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="lessonContent">
            <h1 className="contentHeader">{selectedLessonInfo?.contentName}</h1>
            <div className="contentMain">
              <h3 className="contentMainHead">
                {selectedLessonInfo?.educationName}
              </h3>
              <div className="videoContainer">
                <iframe
                  src={selectedLessonInfo?.videoUrl}
                  className="video"
                ></iframe>
              </div>
              <div className="contentText">
                <div className="firstTenSentences contentLessonText">
                  {firstTenSentences}
                </div>
                <img
                  src={selectedLessonInfo?.contentImageUrl}
                  alt=""
                  className="contentImage"
                />
              </div>
              <div className="remainingText contentLessonText">
                {remainingText}
              </div>
            </div>
            <div className="lessonButtonContainer">
              <button className="contentLessonButton">Eğitim Tamamlandı < FaCaretRight className="contentLessonIcon"/></button>
            </div>
          </div>
        )}
      </>
      <Footer />
    </>
  );
}

export default LessonContent;
