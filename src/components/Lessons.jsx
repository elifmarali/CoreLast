import React, { useEffect, useState } from "react";
import LessonsContext from "../context/LessonsContext";
import { useContext } from "react";
import LessonItem from "./LessonItem";
import Header from "./Header";
import "./Lessons.css";

import Footer from "./Footer";
import { FaCaretRight } from "react-icons/fa";

function Lessons() {
  const { lessons, lessonGroup } = useContext(LessonsContext);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (lessonGroup !== null && lessonGroup !== undefined) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [lessonGroup, lessons]);

  const handleShowAll = () => {
    setShowAll(true);
  };
  const handleClickClose = () => {
    setShowAll(false);
  };
  return (
    <>
      <Header />
      <div className="lessons">
        {loading ? (
          <div>Yukleniyor...</div>
        ) : (
          Object.keys(lessonGroup).map((key) => (
            <div className="lesson" key={key}>
              <div className="lessonTopSection">
                {" "}
                <h2 className="lessonHeader">{key}</h2>
                {showAll && lessonGroup[key].length > 3 ? <button onClick={handleClickClose}>X</button> : ""}
              </div>
              <div className="lessonContainer" >
                <div className="lessonItemGroup" >
                  {showAll
                    ? lessonGroup[key].map((lesson, index) => (
                        <>
                          <LessonItem
                            lesson={lesson}
                            key={index}
                            id={lesson.educationId}
                          />
                        </>
                      ))
                    : lessonGroup[key]
                        .slice(0, 3)
                        .map((lesson, index) => (
                          <LessonItem
                            lesson={lesson}
                            key={index}
                            id={lesson.educationId}
                          />
                        ))}
                  {lessonGroup[key].length > 3 && !showAll && (
                    <button onClick={handleShowAll} className="showMoreButton">
                      Daha Fazlası <FaCaretRight className="lessonIcon"/>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Lessons;
