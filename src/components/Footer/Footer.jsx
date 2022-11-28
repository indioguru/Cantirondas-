import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ color }) => {
  const navigate = useNavigate();

  const coloBackground = () => {
    const back = document.querySelector(".footer");
    back.style.backgroundColor = `${color}`;
  };

  useEffect(() => {
    coloBackground();
  }, []);

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_container_items">
          <a target="_blank" href="https://www.youtube.com/@CantiRondas" className="ga4-call_to_action-redes_footer">
            <div className="footer_container_items_youtube"></div>
          </a>
          <a target="_blank" href="https://open.spotify.com/user/0nmf4hucm0cto99is31curkmr?si=19998a14fcc24673" className="ga4-call_to_action-redes_footer">
            <div className="footer_container_items_spotify"></div>
          </a>
          <a target="_blank" href="https://www.instagram.com/canti.rondas/" className="ga4-call_to_action-redes_footer">
            <div className="footer_container_items_instagram"></div>
          </a>
          <a target="_blank" href="https://wgitww.facebook.com/cantirondas" className="ga4-call_to_action-redes_footer">
            <div className="footer_container_items_facebook"></div>
          </a>
        </div>
        <div className="footer_container_info">
          <h1 onClick={() => navigate("/nuestrasCanciones")}>
            NUESTRAS CANCIONES
          </h1>
          <h1 onClick={() => navigate("/descargables")}>DESCARGABLES</h1>
          <h1>TIENDA</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
