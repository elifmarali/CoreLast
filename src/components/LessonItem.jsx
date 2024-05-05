import React, { useContext, useEffect } from "react";
import "./Lessons.css";
import { useNavigate } from "react-router-dom";
import LessonsContext from "../context/LessonsContext";
import { FaCaretRight } from "react-icons/fa";
import AuthContext from "../context/AuthContext";

function LessonItem({ lesson, id }) {
  const { setSelectedLesson, timeFunc, selectedLessonInfo } =
    useContext(LessonsContext);
  const { currentUser } = useContext(AuthContext);

  const nav = useNavigate();
  const handleItemClick = () => {
    if (currentUser) {
      setSelectedLesson(id);
      nav(`/lessonContent/${id}`);
    } else {
      nav("/login");
    }
  };
  return (
    <div className="lessonItem" onClick={handleItemClick}>
      <h2 className="itemHeader">{lesson.educationName}</h2>
      <img src={lesson.contentImageUrl} alt="" className="itemImage" />
      <a className="itemNav">
        Daha fazlası için <FaCaretRight className="lessonItemIcon" />
      </a>
    </div>
  );
}

export default LessonItem;
