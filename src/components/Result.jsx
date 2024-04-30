import React, { useContext, useEffect, useState } from "react";
import "./Result.css";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Result() {
  const { userID, examName } = useParams();
  const { currentUserPointsData, currentUser } = useContext(AuthContext);
  const [examScore, setExamScore] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const score = await currentUserPointsData[examName];
      setExamScore(score);
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

 const supervisorName = "TEDDY YU"; 
 const managerName = "DREW FEIĞ";
 ctx.font = "24px  Italic "; 
 ctx.fillStyle = "#000"; 
 ctx.fillText(`Supervisor`, 300, 550);
 ctx.font = "16px Italic";
 ctx.fillText(`${supervisorName}`, 300, 570);
 ctx.font = "24px Italic "; 
 ctx.fillText(`Manager`, 600, 550);
 ctx.font = "16px Italic";
 ctx.fillText(` ${managerName}`, 600, 570);


      const downloadBtn = document.createElement("a");
      downloadBtn.href = canvas.toDataURL("image/jpg");
      downloadBtn.download = `Certificate - ${examName} - ${currentUser}.jpg`;
      downloadBtn.click();

      document.body.removeChild(canvas);
    };

    document.body.appendChild(canvas);
  };
  

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
        </div>
      </section>
    </main>
  );
}

export default Result;
