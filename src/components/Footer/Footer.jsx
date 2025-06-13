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
          <a
            target="_blank"
            href="https://www.youtube.com/@CantiRondas"
            className="ga4-call_to_action-redes_footer"
          >
            <div className="footer_container_items_youtube"></div>
          </a>
          <a
            target="_blank"
            href="https://open.spotify.com/artist/1oaOuEY1r5gNPPq1G9Y9eC?si=FTNP8YzSSlaYhhULcvqjnw"
            className="ga4-call_to_action-redes_footer"
          >
            <div className="footer_container_items_spotify"></div>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/canti.rondas/"
            className="ga4-call_to_action-redes_footer"
          >
            <div className="footer_container_items_instagram"></div>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/cantirondas"
            className="ga4-call_to_action-redes_footer"
          >
            <div className="footer_container_items_facebook"></div>
          </a>

          <a
            target="_blank"
            href="https://vm.tiktok.com/ZM2vXdeaQ/"
            className="ga4-call_to_action-redes_footer"
          >
            <div className="footer_container_items_tick"></div>
          </a>
        </div>
        <div className="footer_container_info">
          <h1 onClick={() => navigate("/")}>HOME</h1>
          <h1 onClick={() => navigate("/nuestrasCanciones")}>NUESTRAS CANCIONES</h1>
          <h1 onClick={() => navigate("/descargables")}>DESCARGABLES</h1>
          <h1 onClick={() => window.open("https://tienda.cantirondas.com/", "_blank")}>
            TIENDA
          </h1>
          <h1
            onClick={() =>
              (window.location.href =
                "https://cantirondas.com/tucancion.cantirondas.com/")
            }
          >
            canción de cumpleaños personalizada
          </h1>

          <h1
            onClick={() =>
              (window.location.href = "https://cantirondas.com/videopersonalizado/")
            }
          >
            crea tu video personalizado
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
