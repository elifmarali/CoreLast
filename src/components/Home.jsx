import React, { useContext, useEffect, useState } from "react";
import {Container,  Row,  Col,  Card,  CardBody,  CardTitle,  CardSubtitle,  CardText,  Button, CardGroup,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import image from "../images/x.png";
import freeSvg from "../svg/free-svgrepo-com.svg";
import fastSvg from "../svg/fast-svgrepo-com.svg";
import certificateSvg from "../svg/certificate-svgrepo-com.svg";
import categorySvg from "../svg/category-svgrepo-com.svg";
import simpleSvg from "../svg/simple-like-hand-line-drawing-svgrepo-com.svg";
import safetySvg from "../svg/safety-supervision-svgrepo-com.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext.jsx";
import AuthServices from "../services/authServices.jsx";
import ExamsContext from "../context/ExamsContext.jsx";
import user1 from "../usersPhoto/2.jpeg";
import user2 from "../usersPhoto/3.jpeg";
import user3 from "../usersPhoto/4.jpeg";
import user4 from "../usersPhoto/27.jpg";
import user5 from "../usersPhoto/5.jpeg";
import { FaFreeCodeCamp } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaShapes } from "react-icons/fa6";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlinePlayLesson } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { AiOutlineExclamation } from "react-icons/ai";
import examImage from "../usersPhoto/exam.jpg";
import exam1Image from "../usersPhoto/lesson.jpg";
import whyImage from "../usersPhoto/why.png";
function Home() {
  const navigate = useNavigate();
  const { currentUserPointsData, currentUser } = useContext(AuthContext);
  const [formattedName, setFormattedName] = useState("");

  useEffect(() => {
    AOS.init({ duration: "700" });
  }, []);

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

  return (
    <div className="HomeContainer">
      <div className="topSectionHome">
        <Header />
        <div className="homeContainer">
          <div className="home">
            <div className="content">
              <h2 className="contentHead">
                CoreCampus: Eğitimde Yenilikçi Adımınız
              </h2>
              <h4 className="contentSubtitle">
                Sertifikasyon ve Eğitimde Kolaylık ve Esneklik"
              </h4>
              <h6 className="contentDescription">
                CoreCampus, eğitim ve sertifikasyon süreçlerini kolaylaştırarak,
                herkesin erişimini sağlayan yenilikçi bir platformdur. Esnek
                yapı ve kullanıcı odaklı yaklaşımıyla, eğitimde yeni bir döneme
                kapı aralıyoruz.
                <b className="contentDescriptionBold">
                  Unutmayın, başarıya giden yolda CoreCampus yanınızda!
                </b>
              </h6>
            </div>
            <div className="middleSection">
              <div className="totalContainer">
                <div className="totalText">Kullanıcılarımız</div>
                <div className="usersContainer">
                  <div className="containerRelative">
                    <img src={user1} alt="" className="userImage" />
                    <img src={user2} alt="" className="userImage" />
                    <img src={user3} alt="" className="userImage" />
                    <img src={user4} alt="" className="userImage" />
                    <img src={user5} alt="" className="userImage" />
                    <span className="userCount">20K+</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contentRightSection">
              <span className="irregularCircle"></span>
              <img src={image} alt="" className="contentImage" />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="mainTitle">
          <span className="mainLine" />
          Özelliklere Göz At
          <AiOutlineExclamation size={20} />
        </div>
        <div className="featureHeader">
          Neden CoreCampus'ü Tercih Etmelisiniz?
        </div>
        <div className="mainSubtitle">
          Eğitimde Çözüm Odaklı Yaklaşımın Adı: CoreCampus
        </div>
        <div className="featureContainer" data-aos="fade-up-left">
          <div className="featureCard">
            <div className="featureCardSvg">
              <MdCastForEducation size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Eğitimler</div>
            <div className="featureCardDescription">
              CoreCampus, geniş bir eğitim kursu yelpazesi sunar.
            </div>
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div> Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <MdOutlinePlayLesson size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Eğitim Değerlendirmesi</div>
            <div className="featureCardDescription">
              Kullanıcılar, eğitim sonrasında eğitimi değerlendirirler.
            </div>{" "}
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div>Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <PiExam size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Sınav Değerlendirmesi</div>
            <div className="featureCardDescription">
              Kullanıcılar, tamamladıkları sınavları değerlendirirler.
            </div>{" "}
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div>Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <AiOutlineFieldTime size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Kısa Süreli Sınavlar</div>
            <div className="featureCardDescription">
              Kullanıcıların kısa süreli sınavlarla bilgi düzeylerini
              değerlendirirler.
            </div>
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div> Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <AiFillSafetyCertificate size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Sertifikalar ve Başarı</div>
            <div className="featureCardDescription">
              Sınavlardan başarıyla geçen kullanıcılar sertifikalar kazanırlar.
            </div>
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div> Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <FaShapes size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Çeşitli Sınavlar</div>
            <div className="featureCardDescription">
              CoreCampus kullanıcıları farklı konularda sınavlara katılır.
            </div>
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div> Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg" style={{ marginBottom: "14px" }}>
              <MdOutlineMobileFriendly size={40} style={{ color: "#ff8e3c" }} />
            </div>
            <div className="featureCardHeader">Kullanıcı Dostu Arayüz</div>
            <div className="featureCardDescription">
              Net bilgi sunumu ve basit kullanımı ile kullanıcı dostudur.
            </div>
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div> Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardSvg">
              <AiOutlineSafetyCertificate
                size={50}
                style={{ color: "#ff8e3c" }}
              />
            </div>
            <div className="featureCardHeader">Güvenli Bilgi Saklama</div>
            <div className="featureCardDescription">
              Kullanıcı bilgileri, JWT ile güvenli bir
              şekilde saklanır.
            </div>{" "}
            <div
              className="featureLink"
              onClick={() => {
                navigate("/about");
              }}
            >
              <div> Daha fazla bilgi için</div>
              <div>
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <button onClick={() => navigate("/about")} className="featureButton">
            Daha Fazla...
          </button>
        </div>
      </div>
      <div className="homeLessonExamContainer">
        <div className="lessonExamTop">
          <div className="lessonExamTitle">
            <span className="mainLine" />
            CoreCampus
          </div>
          <div className="featureHeader">Eğitimler & Sınavlar</div>
          <div className="mainSubtitle">
            Hangi İçeriğimizi Tercih Etmek İstersiniz?
          </div>
        </div>
        <div className="lessonExamBottom">
          <div className="lessonExamCard">
            <img
              src={exam1Image}
              alt="lessonUserImage"
              className="lessonExamImage"
            />
            <div className="lessonExamCardTitle">
              Eğitimlerimize göz atmak ister misin?
            </div>
            <p className="lessonExamDesc">
              Bizimle birlikte öğrenmeye hazır mısınız? Uzmanlarımız tarafından
              hazırlanan eğitim içeriklerini keşfedin ve alanınızda kendinizi
              geliştirin.
            </p>
            <button className="lessonExamButton">Eğitimlere Git</button>
          </div>
          <div className="lessonExamCard">
            <img
              src={examImage}
              alt="examUserImage"
              className="lessonExamImage"
            />
            <div className="lessonExamCardTitle">
              Sertifika kazanmak ister misin?
            </div>
            <p className="lessonExamDesc">
              Kendinizi test edin ve hazır hissedene kadar pratik yapın.
              Sonucunda sertifikalarınızı cv'nize ekleyin!
            </p>
            <button
              className="lessonExamButton"
              onClick={() => {
                navigate("/examsPage");
              }}
            >
              Sınav Hazırlıklarına Git
            </button>
          </div>
        </div>
      </div>
      <div className="whyChooseUs">
        <div className="whyRightSection">
          <img src={whyImage} alt="why image" className="whyImage" />
        </div>
        <div className="whyLeftSection">
          <h3 className="whyHeader">Bizi Tercih Etmeniz İçin Nedenler</h3>
          <ul className="whyList">
            <span className="whySpan" />
            <li className="whyItem">
              <strong>Uzman İçerikler:</strong> Alanında uzman eğitmenlerimiz
              tarafından hazırlanan içeriklerle kendinizi geliştirin.
            </li>
            <li className="whyItem">
              <strong>Kapsamlı Kaynaklar:</strong> Geniş kütüphanemizdeki
              eğitimler ve sınav hazırlıkları ile ihtiyacınız olan her şeye
              erişin.
            </li>
            <li className="whyItem">
              <strong>Esneklik:</strong> İstediğiniz zaman, istediğiniz yerden
              erişebilme olanağıyla öğrenmeyi kolaylaştırın.
            </li>
          </ul>
        </div>
      </div>
      <div className="bottomSectionHome">
        <div className="promationSection">
          {currentUser ? (
            <>
              <div className="promationSectionText">
                Merhaba, {formattedName}! CoreQuiz'e hoş geldiniz.
              </div>
              <button
                className="promationSectionButton"
                onClick={() => navigate("/examsPage")}
              >
                Hemen Sınavlara Göz Atın!
              </button>
            </>
          ) : (
            <>
              <div className="promationSectionText">
                Hala CoreCampus'e Üye Olmadınız Mı?
              </div>
              <button
                className="promationSectionButton"
                onClick={() => navigate("/register")}
              >
                Hemen Üye Ol!
              </button>
            </>
          )}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home;