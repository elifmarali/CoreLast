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
  const [time, setTime] = useState();
  const [selectedStars, setSelectedStars] = useState(0);
  const [star, setStar] = useState();
  useEffect(() => {
    getLessonsData();
  }, []);

  useEffect(() => {
    if (selectedLesson !== undefined) {
      getSelectedLessonInfo();
      getTimeInfo();
      getStar(selectedLesson);
    }
  }, [selectedLesson]);

  const getTimeInfo = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44309/api/Education/getVideoTimeById?id=${selectedLesson}`
      );
      const timeInfo = response.data.data;

      if (timeInfo) {
        let timeCalc = timeInfo.split(":");
        let hours = parseInt(timeCalc[0]);
        let minutes = parseInt(timeCalc[1]);
        let seconds = parseInt(timeCalc[2]);
        let totalTimeInMillis = (hours * 3600 + minutes * 60 + seconds) * 1000;
        setTime(totalTimeInMillis);
      }
    } catch (err) {
      console.error("Error fetching time info data:", err);
    }
  };

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
    const groupedLessons = {};

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

  const assessmentMade = (stars) => {
    axios
      .post(
        `https://localhost:44309/api/Education/vote?educationId=${selectedLesson}&vote=${stars}`,
        {
          educationId: selectedLesson,
          vote: stars,
        }
      )
      .then((response) => {
        if (response) {
          console.log(response);
        }
        return response.data;
      });
  };

  const getStar = async (id) => {
    try {
      const response = await axios.get(
        `https://localhost:44309/api/Education/getVote?id=${id}`
      );
      if (response.data.data === 0) {
        setStar(0);
      } else {
        setStar(response.data.data);
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        // Eğer 400 hatası alınırsa, 0 olarak ayarla
        setStar(0);
      } else {
        // Diğer hata durumlarını işle
      }
    }
  };
  
  

  const data = {
    lessons,
    lessonGroup,
    selectedLesson,
    setSelectedLesson,
    selectedLessonInfo,
    time,
    assessmentMade,
    selectedStars,
    setSelectedStars,
    star,
    getStar
  };

  return (
    <LessonsContext.Provider value={data}>{children}</LessonsContext.Provider>
  );
}

export default LessonsContext;
export { LessonsProvider };
