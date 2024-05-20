import { useState, useEffect, useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authServices";
import ExamsContext from "../context/ExamsContext";
import AuthContext from "../context/AuthContext";
import logo from "../images/LOGO-3.webp";
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const navigate = useNavigate();
  const {
    currentUser,
    setCurrentUser,
    currentUserId,
    setCurrentUserId,
    currentUserPointsData,
    setCurrentUserPointsData,
  } = useContext(AuthContext);
  const {
    allExams,
    clickExam,
    setExamId,
    setQuestionName,
    examId,
    fetchStars,
  } = useContext(ExamsContext);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const username = AuthService.getUsernameFromToken();
    setCurrentUser(username);
  }, []);

  const handleClickExam = (exam, examId) => {
    if (currentUser) {
      const { examName } = exam;
      if (
        currentUserPointsData &&
        currentUserPointsData[examName] !== undefined
      ) {
        // Eğer kullanıcı daha önce bu sınava girdiyse
        setQuestionName(examName);
        setExamId(examId);
        navigate(`/result/${currentUserId}/${examName}`);
      } else {
        // Eğer kullanıcı daha önce bu sınava girmediyse
        setExamId(examId);
        setQuestionName(examName);
        clickExam(examId);
        navigate("/questionInfo");
      }
    } else {
      navigate("/login");
    }
  };

  const handleExamTab = () => {
    fetchStars(allExams);
    navigate("/examsPage");
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setCurrentUserId(null);
    setCurrentUserPointsData(null);
  };

  return (
    <div className={`header ${theme === "dark" ? theme : ""}`}
    >
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={logo}
          alt=""
          width={120}
          height={90}
          style={{ borderRadius: "10px" }}
        />
      </div>

      <div className="nav-list">
        <ul>
          <li className="nav-item">
            <button onClick={() => navigate("/lessons")} className="nav-link">
              Eğitimler
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => {
                handleExamTab();
              }}
              className="nav-link"
            >
              Sınavlar
            </button>
            <div className="submenu">
              <ul>
                {allExams !== null && allExams !== undefined ? (
                  allExams.map((exam) => {
                    return (
                      <li key={exam.id}>
                        <a
                          href="#"
                          key={exam.id}
                          onClick={() => {
                            handleClickExam(exam, exam.id);
                          }}
                        >
                          {exam.examName}
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <div>Yükleniyor...</div>
                )}
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigate("/certificates")}
              className="nav-link"
            >
              Sertifikalar
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate("/about")} className="nav-link">
              Hakkımızda
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigate("/comunicate")}
              className="nav-link"
            >
              İletişim
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate("/faq")} className="nav-link">
              SSS
            </button>
          </li>
        </ul>
      </div>
      <div className="headerButtonsContainer">
        <div className="themeContainer">
          {theme === "dark" ? (
            <IoIosSunny className="themeIcon" onClick={() => setTheme()} />
          ) : (
            <IoMoonOutline
              className="themeIcon"
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
        {currentUser ? (
          <div className="userOptions">
            <button className="logOutButton" onClick={handleLogout}>
              Çıkış Yap
            </button>
            <span
              className="userOptionsFullName"
              onClick={() => {
                navigate(`/user/${currentUserId}`);
              }}
            >
              Merhaba, {currentUser}!
            </span>
          </div>
        ) : (
          <>
            <button
              onClick={() => navigate("/register")}
              className="nav-button"
            >
              Kayıt Ol
            </button>
            <button onClick={() => navigate("/login")} className="nav-button">
              Giriş Yap
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
