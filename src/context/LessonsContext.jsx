import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const LessonsContext = createContext();

function LessonsProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [lessons, setLessons] = useState([]);
  const [lessonGroup, setLessonGroup] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState();
  const [selectedLessonInfo, setSelectedLessonInfo] = useState();
  useEffect(() => {
    if (currentUser) {
      getLessonsData();
    }
  }, [currentUser]);

  useEffect(() => {
    if (selectedLesson !== undefined) {
      getSelectedLessonInfo();
    }
  }, [selectedLesson]);

  const getLessonsData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44309/api/Education/getAllEducationDto"
      );
      const lessonsData = response.data.data;
      setLessons(lessonsData);
      const groupedLessons = groupLessonsByContentName(lessonsData);
      setLessonGroup(groupedLessons);
    } catch (error) {
      console.error("Error fetching lessons data:", error);
    }
  };

  const groupLessonsByContentName = (lessons) => {
    const groupedLessons = [];

    lessons.forEach((lesson) => {
      const { contentName, ...rest } = lesson;

      if (!groupedLessons[contentName]) {
        groupedLessons[contentName] = [rest];
      } else {
        groupedLessons[contentName].push(rest);
      }
    });
    return groupedLessons;
  };

  const getSelectedLessonInfo = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44309/api/Education/getById?id=${selectedLesson}`
      );
      const lessonInfo = response.data.data;

      setSelectedLessonInfo(lessonInfo);
    } catch (err) {
      console.error("Error fetching lessons info data:", err);
    }
  };

  const data = {
    lessons,
    lessonGroup,
    selectedLesson,
    setSelectedLesson,
    selectedLessonInfo,
  };

  return (
    <LessonsContext.Provider value={data}>{children}</LessonsContext.Provider>
  );
}

export default LessonsContext;
export { LessonsProvider };
