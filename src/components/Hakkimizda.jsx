import React, { useContext } from "react";
import Header from "./Header";
import "./Hakkimizda.css";
import Footer from "./Footer";
import banner from "../image/about-banner.png";
import lessons from "../image/dersler.png";
import exam from "../image/sınav.png";
import wrapping from "../image/3d-glassy-iridescent-connections-in-a-glass-molecule-1.png";
import completion from "../image/ders-tamamlama.png"
import success from "../image/sertifika.png"
import {useSpring, animated} from "react-spring"; 
import ThemeContext from "../context/ThemeContext";
// npm i react-spring


function Hakkimizda() {
    const {theme}=useContext(ThemeContext);

    function Number({n}){
        const {number} = useSpring({
            from: {number : 0},
            number: n,
            delay:200,
            config: {mass: 1, tension: 25, friction:10}, 
        });
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }

  return (
    <div classNameName="aboutContainer">
      <Header />

      <main>
        <article>
            <section className="section about" id="about">
                <div className="container">
                    <figure className="about-banner">
                        <img src={banner} width="700" height="532" loading="lazy" alt="about banner" className="w-100 banner-animation"/>
                    </figure>
                    <div className="about-content">
                        <h2 className="h2 section-title underline">Neden CoreCampus?</h2>
                        <p className="about-text">
                            CoreCampus, çeşitli eğitim ve sınav içeriklerini bir araya getiren, sertifikasyon modeline hizmet eden bir deneyim sunar. Birçok farklı eğitim alanından içeriği tek bir çatı altında buluşturarak, kullanıcıların gereksinimlerine kolayca cevap verir.
                        </p>
                        <p className="about-text">
                            CoreCampus, eğitim deneyimini daha esnek hale getirirken, sınav deneyimini daha etkili ve hızlı bir şekilde gerçekleştirmeyi hedefler. Kullanıcılar, istedikleri zaman istedikleri yerde eğitim alabilir ve sınavlara katılabilirler. Bu esneklik, kullanıcıların zamanını daha verimli bir şekilde yönetmelerine olanak tanır.
                        </p>
                        <ul className="stats-list">
                            <li className="stats-card">
                                <p className="h3 stats-title"><Number n={9785}/></p>
                                {/* <p className="h3 stats-title">9875</p> */}
                                <p className="stats-text">Kayıtlı Öğrenci</p>
                            </li>
                            <li className="stats-card">
                                <p className="h3 stats-title"><Number n={185}/></p>
                                {/* <p className="h3 stats-title">185</p> */}
                                <p className="stats-text">Farklı Alan</p>
                            </li>
                            <li className="stats-card">
                                <p className="h3 stats-title"><Number n={1162}/></p>
                                {/* <p className="h3 stats-title">1162</p> */}
                                <p className="stats-text">Kazanılan Sertifika</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
     
            <section className="ps-timeline-sec">
                <div className="container">
                    <ol className="ps-timeline">
                        <li>
                            <div className="img-handler-top">
                                <img src={lessons} alt="dersler-image"/>
                            </div>
                            <span className="ps-sp-top">☆</span>
                            <div className="ps-bot">
                                <p>Sisteme giriş yap veya kayıt ol.</p>
                            </div>
                        </li>
                        <li>
                            <div className="img-handler-bot">
                                <img src={completion} alt=""/>
                            </div>
                            <span className="ps-sp-bot">☞</span>
                            <div className="ps-top">
                                <p>Sana uygun eğitimlerden birini seç ve eğitimi tamamla.</p>
                            </div>   
                        </li>
                        <li>
                            <div className="img-handler-top">
                                <img src={exam} alt="sinav-image"/>
                            </div>
                            <span className="ps-sp-top">☞</span>
                            <div className="ps-bot">
                                <p>Sınava giriş yap ve yeterli sonuca ulaş.</p>
                            </div>  
                        </li>
                        <li>
                            <div className="img-handler-bot">
                                <img src={success} alt=""/>
                            </div>
                            <span className="ps-sp-bot">★
                            </span>
                            <div className="ps-top">
                                <p>Sertifikanı al ve CV'ne yerleştir.</p>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
  
            <section className="section team" id="team">
                <div className="container">
                    <h2 className="h2 section-title underline">
                        CoreTeam Ekibimiz
                    </h2>
                    <ul className="team-list">
                        <li>
                            <div className="team-card">
                                <div className="card-icon">
                                    <ion-icon name="desktop-outline"></ion-icon>
                                </div>
                                <h3 className="h3 title">Front-End Ekibi</h3>
                                <p className="text">Elif Maralı</p>
                                <p className="text">Mehmet Fatih Kara</p>
                                <p className="text">Murat Özkan Kaya</p>
                            </div>
                        </li>
                        <li>
                            <div className="team-card">
                                <div className="card-icon">
                                    <ion-icon name="globe-outline"></ion-icon>
                                </div>
                                <h3 className="h3 title">Back-End Ekibi</h3>
                                <p className="text">Doğukan Muslukçu</p>
                                <p className="text">Cemre Gözde Uyar</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </section>
          
            <section className="subscribe-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="heading">
                                <h2> CoreCampus öğrenci topluluklarına katılın veya bizimle iletişime geçin! </h2>
                            </div>
                            <div className="text-wrap">
                                <p>Yeni gelen içerikler, sizle aynı eğitimi alan öğrenciler, önerileriniz, fikirleriniz ve çok daha fazlası için aşağıda yer alan sosyal medya hesaplarımızı mutlaka göz atmalısın.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ill-wrap">
                                <img src={wrapping} className="wrap-img" alt="mobile-photo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="socials-subscribe-section">
                <div className="container">
                    <div className="row">
                        <div className="block">
                            <a href="#" target="_blank">
                                <div className="image"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.107 5.63708C25.0356 4.66791 22.8208 3.96356 20.5052 3.5625C20.2208 4.07665 19.8886 4.76819 19.6595 5.3183C17.198 4.94812 14.7591 4.94812 12.3429 5.3183C12.1139 4.76819 11.7741 4.07665 11.4871 3.5625C9.16908 3.96356 6.95167 4.6705 4.88026 5.64221C0.70219 11.9558 -0.430415 18.1126 0.135889 24.182C2.907 26.2514 5.59255 27.5085 8.23277 28.3311C8.88465 27.4339 9.46605 26.4802 9.9669 25.475C9.013 25.1126 8.09937 24.6653 7.2361 24.146C7.46512 23.9763 7.68914 23.7989 7.90557 23.6164C13.1709 26.0791 18.8919 26.0791 24.0943 23.6164C24.3133 23.7989 24.5373 23.9763 24.7638 24.146C23.898 24.6678 22.9818 25.1151 22.0279 25.4776C22.5288 26.4802 23.1077 27.4365 23.7621 28.3336C26.4048 27.511 29.0929 26.254 31.864 24.182C32.5285 17.146 30.7289 11.0458 27.107 5.63708ZM10.6842 20.4494C9.10363 20.4494 7.8074 18.9738 7.8074 17.1769C7.8074 15.38 9.07595 13.9018 10.6842 13.9018C12.2926 13.9018 13.5887 15.3774 13.5611 17.1769C13.5636 18.9738 12.2926 20.4494 10.6842 20.4494ZM21.3157 20.4494C19.735 20.4494 18.4388 18.9738 18.4388 17.1769C18.4388 15.38 19.7073 13.9018 21.3157 13.9018C22.9239 13.9018 24.2202 15.3774 24.1925 17.1769C24.1925 18.9738 22.9239 20.4494 21.3157 20.4494Z" fill="#5865F2"></path>
                                    </svg></div>
                                    <div className="title">Discord</div>
                                    <div className="text">Discord kanalımıza katılarak bize ulaşın.</div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#" target="_blank">
                                <div className="image">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32 6.06641C30.8 6.59974 29.5333 6.93307 28.2 7.13307C29.5333 6.33307 30.6 5.06641 31.0667 3.53307C29.8 4.26641 28.4 4.79974 26.8667 5.13307C25.6667 3.86641 23.9333 3.06641 22.0667 3.06641C18.4667 3.06641 15.5333 5.99974 15.5333 9.59974C15.5333 10.1331 15.6 10.5997 15.7333 11.0664C10.3333 10.7997 5.46667 8.19974 2.2 4.19974C1.66667 5.19974 1.33333 6.26641 1.33333 7.46641C1.33333 9.73307 2.46667 11.7331 4.26667 12.9331C3.2 12.8664 2.2 12.5997 1.26667 12.1331V12.1997C1.26667 15.3997 3.53333 18.0664 6.53333 18.6664C6 18.7997 5.4 18.8664 4.8 18.8664C4.4 18.8664 3.93333 18.7997 3.53333 18.7331C4.4 21.3331 6.8 23.2664 9.66667 23.2664C7.4 24.9997 4.6 26.0664 1.53333 26.0664C1 26.0664 0.466667 26.0664 0 25.9997C2.93333 27.8664 6.33333 28.9331 10.0667 28.9331C22.1333 28.9331 28.7333 18.9331 28.7333 10.2664C28.7333 9.99974 28.7333 9.66641 28.7333 9.39974C30 8.53307 31.1333 7.39974 32 6.06641Z" fill="#1DA1F2"></path>
                                        </svg>
                                </div>
                                <div className="title">Twitter</div>
                                <div className="text">Twitter'da bizi takip edin ve keşfedin.</div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#" target="_blank">
                                <div className="image">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_7256_1308)">
                                        <path d="M31.9376 3.36946C31.9117 3.2513 31.855 3.14209 31.7733 3.05288C31.6915 2.96368 31.5877 2.89764 31.4723 2.86146C31.0518 2.77819 30.6168 2.80904 30.2123 2.95079C30.2123 2.95079 2.17362 13.0295 0.572283 14.1455C0.228283 14.3855 0.112283 14.5255 0.0549493 14.6895C-0.222384 15.4895 0.640283 15.8335 0.640283 15.8335L7.86695 18.1881C7.98914 18.21 8.11479 18.2027 8.23362 18.1668C9.87628 17.1281 24.7669 7.72146 25.6323 7.40546C25.7656 7.36546 25.8683 7.40546 25.8416 7.50546C25.4976 8.71213 12.6296 20.1428 12.5589 20.2121C12.5245 20.2403 12.4977 20.2767 12.4809 20.3179C12.4642 20.3591 12.458 20.4039 12.4629 20.4481L11.7883 27.5041C11.7883 27.5041 11.5056 29.7001 13.7016 27.5041C15.2589 25.9455 16.7536 24.6548 17.5003 24.0268C19.9856 25.7428 22.6589 27.6401 23.8123 28.6335C24.0063 28.8212 24.2361 28.968 24.4882 29.0649C24.7402 29.1618 25.0091 29.2069 25.2789 29.1975C25.6112 29.157 25.9233 29.0162 26.1736 28.794C26.424 28.5718 26.6007 28.2786 26.6803 27.9535C26.6803 27.9535 31.7869 7.38946 31.9576 4.63479C31.9749 4.36813 31.9976 4.19213 32.0003 4.00679C32.0086 3.79248 31.9875 3.57805 31.9376 3.36946Z" fill="#2AABEE"></path>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_7256_1308">
                                        <rect width="32" height="32" fill="white"></rect>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                </div>
                                <div className="title">Telegram</div>
                                <div className="text">Telegram kanalımızda güncellemeleri kaçırmayın.</div>
                            </a>
                        </div>
                        <div className="block">
                            <a href="#" target="_blank">
                                <div className="image">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_7256_1311)">
                                        <path d="M17.4122 20.647C16.9779 20.8785 16.4934 20.9995 16.0012 20.9995C15.5091 20.9995 15.0245 20.8785 14.5902 20.647L0.000236237 12.867V25C-0.00552114 25.5269 0.0940102 26.0496 0.29299 26.5375C0.49197 27.0254 0.786391 27.4687 1.15898 27.8413C1.53157 28.2138 1.97481 28.5083 2.46272 28.7073C2.95062 28.9062 3.47335 29.0058 4.00024 29H28.0002C28.5271 29.0058 29.0499 28.9062 29.5378 28.7073C30.0257 28.5083 30.4689 28.2138 30.8415 27.8413C31.2141 27.4687 31.5085 27.0254 31.7075 26.5375C31.9065 26.0496 32.006 25.5269 32.0002 25V12.867L17.4122 20.647Z" fill="#064BF9"></path>
                                        <path d="M28.0002 2.99999H4.00024C3.47335 2.99423 2.95062 3.09377 2.46272 3.29275C1.97481 3.49173 1.53157 3.78615 1.15898 4.15873C0.786391 4.53132 0.49197 4.97457 0.29299 5.46247C0.0940102 5.95038 -0.00552114 6.47311 0.000236237 6.99999V9.99999C7.91141e-05 10.1813 0.0492197 10.3592 0.1424 10.5148C0.235581 10.6703 0.369295 10.7976 0.529236 10.883L15.5292 18.883C15.6744 18.9598 15.8361 18.9999 16.0002 18.9999C16.1644 18.9999 16.3261 18.9598 16.4712 18.883L31.4712 10.883C31.6312 10.7976 31.7649 10.6703 31.8581 10.5148C31.9513 10.3592 32.0004 10.1813 32.0002 9.99999V6.99999C32.006 6.47311 31.9065 5.95038 31.7075 5.46247C31.5085 4.97457 31.2141 4.53132 30.8415 4.15873C30.4689 3.78615 30.0257 3.49173 29.5378 3.29275C29.0499 3.09377 28.5271 2.99423 28.0002 2.99999Z" fill="#064BF9"></path>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_7256_1311">
                                        <rect width="32" height="32" fill="white"></rect>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                </div>
                                <div className="title">Newsletter</div>
                                <div className="text">En yeni kurslardan haberdar olmak için abone olun.</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </main>


    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      <Footer />
    </div>
  );
}

export default Hakkimizda;