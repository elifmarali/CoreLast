import Header from "./Header";
import Footer from "./Footer";
import "./Certificate.css";
import { Carousel, CarouselItem } from 'react-bootstrap';
import { useEffect, useState } from "react";

// Sertifika resimlerini içeren bir dizi
import sertifika1 from "../image/sertıfıka1.jpg";
import sertifika2 from "../image/sertıfıka3.jpg";
import sertifika3 from "../image/sertıfıka2.jpg";

function Certificate() {
  const [index, setIndex] = useState(0);

  // Metinler dizisi
  const descriptions = [
    "Sorular, temel algoritma ve programlama konularını içermektedir. Sorularla ilgili küçük ipuçları verelim; İlk soru, algoritmanın temelini oluşturan adımların yazılmasıyla ilgilidir. İkinci soru, algoritma, programlama ve kodlama arasındaki farkları anlama üzerine odaklanmaktadır. Diğer sorular, problem tanımlama, algoritma yazma aşamaları, mantıksal operatörlerin kullanımı, değişkenlerin işlevi, koşullu ifadeler ve programlama temelleriyle ilgilidir. Soruların genel amacı, temel bilgisayar bilimleri konularında anlayışınızı ölçmektir.",
    "Sorular, biyoloji bilimindeki temel konulara odaklanmaktadır. Sorularla ilgili küçük ipuçları verelim; İlk soru, bitki hücresi ile hayvan hücresi arasındaki temel farkları ele alır. Diğer sorular solunum, kemosentez, tropizma, habitat, özelleşmiş hücreler, biyolojik çeşitlilik, antibiyotik, özgül bağışıklık sistemi, metabolizma, fosfor döngüsü, su döngüsü, ektoparazit, ekotoksikoloji, evrim, antikor, nükleik asitler, biyoteknoloji, DNA replikasyonu ve katalizör gibi önemli konuları içermektedir.",
    "Sorular, hukuk alanındaki temel kavramları ve alt dalları kapsayan geniş bir yelpazeye odaklanmaktadır. Sorularla ilgili küçük ipuçları verelim; İlk soru, hukukun tanımını içerir ve hukukun doğru ve yanlışı belirleyen kurallar bütünü olduğunu vurgular. Diğer sorular, ceza hukuku, anayasa hukuku, medeni hukuk, iş hukuku gibi hukukun alt dallarına odaklanarak öğrencilerin hukuki bilgilerini sınamayı amaçlar.",
  ];

  const titles = [
    "Algoritma Sınavı",
    "Biyoloji Sınavı",
    "Hukuk Sınavı",
  ];

  // Sertifika resimlerini içeren bir dizi
  const sertifikaImages = [sertifika1, sertifika2, sertifika3];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="CertificateContainer">
      <Header />
      <div className="certificateCards">
        <div className="certificateCard">
          <div className="certficate">
            <div className="certificateRightSection">
              <Carousel activeIndex={index} onSelect={handleSelect} interval={6000} wrap={true} controls={true} className="carousel">
                {sertifikaImages.map((image, i) => (
                  <CarouselItem key={i}>
                    <img className="certificateImage w-100" src={image} alt={`image${i}`} />
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
            <div className="certificateContent">
              <h2 className="certificateHead">{titles[index]}</h2>
              <h6 className="certificateDescription">{descriptions[index]}</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Certificate;
