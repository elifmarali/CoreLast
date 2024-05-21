import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import "./Comunicate.css";
import ThemeContext from "../context/ThemeContext";

function Communicate() {
  const [open, setOpen] = useState("");
  const { theme } = useContext(ThemeContext);
  const toggle = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  const mapContainerStyle = {
    flex: "1", // Harita daha fazla yer kaplasın
    height: "400px",
    borderRadius: "10px",
  };

  const position = {
    lat: 41.00164031982422,
    lng: 29.176177978515625,
  };

  const navigate = useNavigate(); // useNavigate hook'unu ekledik

  const handleFaqClick = () => {
    navigate("/faq"); // Butona tıklandığında /SSS sayfasına yönlendirme
  };

  return (
    <div>
      <Header />
      <div className={`comunicateContainer ${theme === "dark" ? theme : ""}`}>
        <div className="containerMap">
          <div className="mapAndListContainer">
            <div className="mapContainer">
              <LoadScript googleMapsApiKey="AIzaSyAxMZnrkcrMTD-68ZnLT88BxPsi0tu5lHo">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={position}
                  zoom={15}
                  mapId="d6e9bb4b35604156"
                >
                  <Marker position={position} title="My location" />
                </GoogleMap>
              </LoadScript>
            </div>
            <div className="listContainer">
              <div className="titleContainer">
                <h4 className="listTitle">İLETİŞİM DETAYLARI</h4>
              </div>
              <Accordion flush open={open} toggle={toggle} className="info">
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    Doğukan MUSLUKÇU&nbsp; - &nbsp;Back-End
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <strong>202003011008@dogus.edu.tr</strong>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="2">
                    Cemre Gözde UYAR&nbsp; - &nbsp;Back-End
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <strong>&#39;202103011111@dogus.edu.tr&#39;</strong>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="3">
                    Mehmet Fatih KARA&nbsp; - &nbsp;Front-End
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <strong>&#39;202003011048@dogus.edu.tr&#39;</strong>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="4">
                    Murat Özkan KAYA&nbsp; - &nbsp;Front-End
                  </AccordionHeader>
                  <AccordionBody accordionId="4">
                    <strong>&#39;202003011036@dogus.edu.tr&#39;</strong>
                  </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                  <AccordionHeader targetId="5">
                    Elif MARALI&nbsp; - &nbsp;Front-End
                  </AccordionHeader>
                  <AccordionBody accordionId="5">
                    <strong>&#39;202003011021@dogus.edu.tr&#39;</strong>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>

              <div className="addressContainer">
                {" "}
                {/* Adres stil değeri eklendi */}
                <FaMapMarkerAlt className="locationIcon" />
                <p className="addressText">
                  Esenkent, Dudullu Osb Mah, Nato Yolu Cd 265/ 1, 34775
                  Ümraniye/İstanbul
                </p>
              </div>

              <button className="faqButton" onClick={handleFaqClick}>
                Sıkça Sorulan Sorular
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Communicate;
