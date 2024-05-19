import React, { useContext, useEffect, useState } from "react";
import "./Result.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ExamsContext from "../context/ExamsContext";

function Result() {
  const { userID, examName } = useParams();
  const { currentUserPointsData, currentUser,setIsExams } = useContext(AuthContext);
  const [examScore, setExamScore] = useState();
  const navigate = useNavigate();
  const {examId,setQuestionName}=useContext(ExamsContext);
  


  useEffect(() => {
    const fetchData = async () => {
      const score = await currentUserPointsData[examName];
      setExamScore(score);
      setIsExams(true);
    };

    fetchData();
  }, [currentUserPointsData, examName]);

  const generateCertificate = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 650;

    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = "/sertifikaSon.png";

    image.onload = function () {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.font = "60px Bebas Neue";
      ctx.fillStyle = "#0d0d0d";

      const currentUserText = `${currentUser}`;
      const currentUserTextWidth = ctx.measureText(currentUserText).width;
      const currentUserX = (canvas.width - currentUserTextWidth) / 2;
      ctx.fillText(currentUserText.toUpperCase(), currentUserX-5 , 100);


      ctx.font = "30px Bebas Neue";
      ctx.fillStyle = "#2a2a2a";
      const examInfoText = `${examName} : ${examScore}`;
      const examInfoTextWidth = ctx.measureText(examInfoText).width;
      const examInfoX = (canvas.width - examInfoTextWidth) / 2;
      ctx.fillText(examInfoText, examInfoX, 160);

      ctx.font = "17px monotype corsiva";
      ctx.fillStyle = "#021B35";
      const certificateText = `Bu sertifika, başarıyla tamamlanan ${examName} sınavında gösterdiğiniz üstün performans ve çaba\n için size verilmiştir. Bu başarı, gösterdiğiniz özveri ve azmin bir göstergesidir. Sizi tebrik eder,\n gelecekteki başarılarınızda da aynı başarıyı sürdürmenizi dileriz.`;
      const certificateTextLines = certificateText.split("\n");

      let lineHeight = 20;
      let textY = 400;
      certificateTextLines.forEach((line) => {
        ctx.fillText(line, 140, textY);
        textY += lineHeight;
      });


 const managerName = "CoreCampus Ekibi";
 ctx.font = "22px  Italic"; 
 ctx.fillStyle = "#000"; 
 ctx.fillText(` ${managerName}`, 600, 570);


      const downloadBtn = document.createElement("a");
      downloadBtn.href = canvas.toDataURL("image/jpg");
      downloadBtn.download = `Certificate - ${examName} - ${currentUser}.jpg`;
      downloadBtn.click();

      document.body.removeChild(canvas);
    };

    document.body.appendChild(canvas);
  };

  const clickAssesmentExams = (examId)=>{
    setQuestionName(examName);
    setIsExams(true);
    navigate(`/assessment/${examId}`);
  }
  

  return (
    <main className="resultMain">
      <section className="resultSection">
        <div className="resultHeader">{examName} Sınavı</div>
        {examScore !== undefined ? (
          <div>
            <div className="resultPoint">Puanınız: {examScore}</div>
            {examScore >= 70 ? (
              <div>
                <p className="resultPoint">Tebrikler! Başarılı oldunuz.</p>
                <a onClick={generateCertificate} className="downloadBtn">
                  Sertifika Dosyasını İndir
                </a>
              </div>
            ) : (
              <p className="resultPoint">Maalesef barajı geçemediniz.</p>
            )}
          </div>
        ) : (
          <div className="resultPoint">Puanınız bekleniyor...</div>
        )}
        <div className="resultButtonContainer">
          <button onClick={() => navigate("/")} className="backHomeButton">
            Ana Sayfaya Geri Dön
          </button>
          <button onClick={() => clickAssesmentExams(examId)} className="backHomeButton">
            Sınavı Değerlendir
          </button>
        </div>
      </section>
    </main>
  );
}

export default Result;
