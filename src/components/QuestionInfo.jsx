import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import ExamsContext from "../context/ExamsContext";
import "./QuestionInfo.css";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function QuestionInfo() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { questionName, examId, questionIndex } = useContext(ExamsContext);
const {theme}=useContext(ThemeContext);
  useEffect(() => {
    if (
      questionName === undefined ||
      examId === undefined ||
      questionIndex === undefined
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="questionInfoContainer">
          <Header />
          <div className="questionInfoMain">
            <h1 className={`head ${theme==="dark" ? theme : ""}`}>{questionName} Testi</h1>
            <div  className={`questionInfoSection ${theme==="dark" ? theme : ""}`}>
              <div className="questionInfoLeftSection">
                <h2 className={`questionInfoLeftSectionHeader ${theme==="dark" ? theme : ""}`} >
                  40 Dakikada Kendini Test Et!
                </h2>
              </div>
              <span className="cizgi"></span>
              <div className="questionInfoRightSection">
                <nav className="questionInfoRightSectionTop">
                  <ul>
                    <h4  className={`rightSectionItem rightSectionItemfs ${theme==="dark" ? theme : ""}`}>
                      Tamamen Ücretsiz
                    </h4>
                    <h4 className={`rightSectionItem rightSectionItemfs ${theme==="dark" ? theme : ""}`}>
                      {questionName} Alanında Kendini Test Et!
                    </h4>
                    <h4 className={`rightSectionItem rightSectionItemfs ${theme==="dark" ? theme : ""}`}>
                      Eğer Başarılı Olursan Sertifika Kazan!
                    </h4>
                  </ul>
                </nav>
                <nav className="questionInfoRightSectionBottom">
                  <ul>
                    <h2 className={`rightSectionItem ${theme==="dark" ? theme : ""}`}>
                      Önceki soruya dönülemez.
                    </h2>
                    <h2 className={`rightSectionItem  ${theme==="dark" ? theme : ""}`}>
                      Yanlış cevaplar doğru cevapları etkilemez.
                    </h2>
                    <h2 className={`rightSectionItem ${theme==="dark" ? theme : ""}`}>
                      Zamanında tamamlanmayan sınavlar otomatik olarak kapanır.
                    </h2>
                    <h2 className={`rightSectionItem ${theme==="dark" ? theme : ""}`}>
                    İnternet veya elektronik arıza, yanlış çıkış durumunda değerlendirme yapılır, tekrar giriş izni verilmez.
                    </h2>
                  </ul>
                </nav>
              </div>
            </div>
            <button
              className="questionInfoButton"
              onClick={() => navigate(`/question/${examId}/${questionIndex}`)}
            >
              Sınava Başla
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionInfo;
