import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Header from "./Header";
import "./Profile.css";
import admin from "../usersPhoto/admin.png";


function Profile() {
  const { currentUser, currentUserPointsData } = useContext(AuthContext);
  const [formattedName, setFormattedName] = useState("");
  const [pointsData, setPointsData] = useState({});
  const [successExam, setSuccessExam] = useState(0);

  useEffect(() => {
    if (currentUser) {
      const fullName = currentUser.split(" ");
      const firstName = fullName[0];
      const lastName = fullName.slice(1).join(" ");

      const formattedName = `${firstName[0].toUpperCase()}${firstName.slice(
        1
      )} ${lastName[0].toUpperCase()}${lastName.slice(1)}`;
      setFormattedName(formattedName);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUserPointsData) {
      setPointsData(currentUserPointsData);
      setSuccessExam(
        Object.entries(currentUserPointsData).filter(
          ([exam, score]) => score >= 70
        ).length
      );
    }
  }, [currentUserPointsData]);

  const handleDownloadCertificate = (exam, examScore) => {
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
      const examInfoText = `${exam} : ${examScore}`;
      const examInfoTextWidth = ctx.measureText(examInfoText).width;
      const examInfoX = (canvas.width - examInfoTextWidth) / 2;
      ctx.fillText(examInfoText, examInfoX, 160);

      ctx.font = "17px monotype corsiva";
      ctx.fillStyle = "#021B35";
      const certificateText = `Bu sertifika, başarıyla tamamlanan ${exam} sınavında gösterdiğiniz üstün performans ve çaba\n için size verilmiştir. Bu başarı, gösterdiğiniz özveri ve azmin bir göstergesidir. Sizi tebrik eder,\n gelecekteki başarılarınızda da aynı başarıyı sürdürmenizi dileriz.`;
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
      downloadBtn.download = `Certificate - ${exam} - ${currentUser}.jpg`;
      downloadBtn.click();

      document.body.removeChild(canvas);
    };

    document.body.appendChild(canvas);
  };

  return (
    <>
      <Header />
      <div className="profileContainer">
        <div className="profile">
          <div className="profileImageContainer">
            <img src={admin} alt="" className="adminImage" />
          </div>
          <div className="profileName">
            <div className="profileNameValue">{formattedName}</div>
          </div>
          <div className="easyInfoContainer">
            <div className="easyItem">
              <label className="easyLabel">Girilen Sınav</label>
              <div className="easyValue">{Object.keys(pointsData).length}</div>
            </div>
            <span className="easySpan" />
            <div className="easyItem">
              <label className="easyLabel">Basarılı Olunan Sınav</label>
              <div className="easyValue">{successExam}</div>
            </div>
          </div>

          {Object.keys(pointsData).length === 0 ? (
            <div className="profileDesc">
              Henüz herhangi bir sınava girmediniz!
            </div>
          ) : (
            <div className="examScores">
              <div className="profileDesc">Girilen Sınavlar ve Puanlar</div>
              <ul className="profileValue">
                {Object.entries(pointsData).map(([exam, score]) => (
                  <li key={exam}>
                    <details>
                      <summary>{exam}</summary>
                      <div className="examDetails">
                        <div className="examInfo">
                          <span className="examName">{exam}</span>
                          <span className="easySpan" />
                          <span className="examScore">{score}</span>
                        </div>
                        {score >= 70 && (
                          <div className="certificateDownload">
                            <a
                              className="profileLink"
                              onClick={() =>
                                handleDownloadCertificate(exam, score)
                              }
                            >
                              Sertifikayı İndir
                            </a>
                          </div>
                        )}
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
