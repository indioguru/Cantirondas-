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
          <div className="footer_container_items_youtube"></div>
          <div className="footer_container_items_spotify"></div>
          <div className="footer_container_items_instagram"></div>
          <div className="footer_container_items_facebook"></div>
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
