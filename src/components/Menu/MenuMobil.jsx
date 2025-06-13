import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuMobil = ({ showMenu = { showMenu } }) => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  const activeAnim = () => {
    const menuMobilOpen = document.querySelector(".menuMobilOpen");
    menuMobilOpen.style.animation = "reverse;";
  };

  const setTime = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="menuMobil">
      <div className="menuMobil_container">
        <div className="menuMobilOpen">
          <div className="prueba">
            <div className="buttonClose">
              <img
                onClick={() => {
                  setTimeout(setTime, 0);
                  activeAnim();
                  showMenu();
                }}
                src="assets/x.png"
                alt=""
              />
            </div>

            <div className="prueba">
              <div className="logoMenu">
                <img src="assets/logo.png" alt="" />
              </div>

              <div className="content_info">
                <h2
                  onClick={() => {
                    showMenu();
                    navigate("/");
                  }}
                >
                  Home
                </h2>
                <h2
                  onClick={() => {
                    showMenu();
                    navigate("/nuestrasCanciones");
                  }}
                >
                  NUESTRAS CANCIONES
                </h2>
                {/* <h2>TIENDA</h2> */}
                <h2
                  onClick={() => {
                    showMenu();
                    navigate("/descargables");
                  }}
                >
                  DESCARGABLES
                </h2>

                <h2
                  onClick={() => window.open("https://tienda.cantirondas.com/", "_self")}
                >
                  TIENDA
                </h2>

                <h2
                  onClick={() =>
                    (window.location.href =
                      "https://cantirondas.com/tucancion.cantirondas.com/")
                  }
                >
                  canción de cumpleaños personalizada
                </h2>

                <h2
                  onClick={() =>
                    (window.location.href = "https://cantirondas.com/videopersonalizado/")
                  }
                >
                  crea tu video personalizado
                </h2>

                <div className="content_info_icons">
                  <a
                    target="_blank"
                    href="https://www.youtube.com/@CantiRondas"
                    className="ga4-call_to_action-redes_footer"
                  >
                    <div className="youtube"></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://open.spotify.com/artist/1oaOuEY1r5gNPPq1G9Y9eC?si=FTNP8YzSSlaYhhULcvqjnw
                    "
                    className="ga4-call_to_action-redes_footer"
                  >
                    <div className="spotify"></div>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.instagram.com/canti.rondas/"
                    className="ga4-call_to_action-redes_footer"
                  >
                    <div className="instagram"></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/cantirondas"
                    className="ga4-call_to_action-redes_footer"
                  >
                    <a
                      target="_blank"
                      href="https://www.facebook.com/cantirondas"
                      className="ga4-call_to_action-redes_footer"
                    >
                      <div className="facebook"></div>
                    </a>
                  </a>
                </div>
              </div>

              <div className="logoDino">
                <img src="assets/dino2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuMobil;
