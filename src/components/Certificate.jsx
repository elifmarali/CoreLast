import Header from "./Header";
import Footer from "./Footer";
import "./Certificate.css";
import image from "../images/CoreQuizİleSeviyeniKanıtla.png";
import sertifika1 from "../images/CertificateAlgoritma.jpg";
import sertifika2 from "../images/CertificateHukuk.jpg";
import sertifika3 from "../images/CertificateBiyoloji.jpg";

function Certificate() {
  return (
    <div className="CertificateContainer">
      <Header />
      <div className="certificateCards">
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">Algoritma Sınavı</h2>
              <h6 className="certificateDescription">
                Sorular, temel algoritma ve programlama konularını
                içermektedir.Sorularla ilgili küçük ipuçları verelim; İlk soru,
                algoritmanın temelini oluşturan adımların yazılmasıyla
                ilgilidir. İkinci soru, algoritma, programlama ve kodlama
                arasındaki farkları anlama üzerine odaklanmaktadır. Diğer
                sorular, problem tanımlama, algoritma yazma aşamaları, mantıksal
                operatörlerin kullanımı, değişkenlerin işlevi, koşullu ifadeler
                ve programlama temelleriyle ilgilidir. Soruların genel amacı,
                temel bilgisayar bilimleri konularında anlayışınızı ölçmektir.
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={sertifika1} alt="" className="certificateImage" />
            </div>
          </div>
        </div>
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">Hukuk Sınavı</h2>
              <h6 className="certificateDescription">
                Sorular, hukuk alanındaki temel kavramları ve alt dalları
                kapsayan geniş bir yelpazeye odaklanmaktadır.Sorularla ilgili
                küçük ipuçları verelim; İlk soru, hukukun tanımını içerir ve
                hukukun doğru ve yanlışı belirleyen kurallar bütünü olduğunu
                vurgular. Diğer sorular, ceza hukuku, anayasa hukuku, medeni
                hukuk, iş hukuku gibi hukukun alt dallarına odaklanarak
                öğrencilerin hukuki bilgilerini sınamayı amaçlar.
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={sertifika2} alt="" className="certificateImage" />
            </div>
          </div>
        </div>
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateContent">
              <h2 className="certificateHead">Biyoloji Sınavı</h2>
              <h6 className="certificateDescription">
                Soruları, biyoloji bilimindeki temel konulara
                odaklanmaktadır.Sorularla ilgili
                küçük ipuçları verelim; İlk soru, bitki hücresi ile hayvan hücresi
                arasındaki temel farkları ele alır. Diğer sorular solunum,
                kemosentez, tropizma, habitat, özelleşmiş hücreler, biyolojik
                çeşitlilik, antibiyotik, özgül bağışıklık sistemi, metabolizma,
                fosfor döngüsü, su döngüsü, ektoparazit, ekotoksikoloji, evrim,
                antikor, nükleik asitler, biyoteknoloji, DNA replikasyonu ve
                katalizör gibi önemli konuları içermektedir.
              </h6>
            </div>
            <div className="certificateRightSection">
              <img src={sertifika3} alt="" className="certificateImage" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
