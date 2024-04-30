import React, {  useContext } from "react";
import "./Lessons.css"
import { useNavigate } from "react-router-dom";
import LessonsContext from "../context/LessonsContext";
import { FaCaretRight } from "react-icons/fa";

function LessonItem({ lesson, id }) {

  const {setSelectedLesson}=useContext(LessonsContext);
  const nav=useNavigate()
  const handleItemClick= ()=>{
    setSelectedLesson(id)
    nav(`/lessonContent/${id}`)
  }
  return (
    <div className="lessonItem" onClick={handleItemClick}>
      <h2 className="itemHeader">{lesson.educationName}</h2>
      <img src={lesson.contentImageUrl} alt="" className="itemImage"/>
      <a className="itemNav">Daha fazlası için <FaCaretRight className="lessonItemIcon"/></a>
    </div>
  );
}

export default LessonItem;
