import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuMobil = () => {
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const showMenu = () => {
    const body = document.querySelector("body");
    body.classList.toggle("noScroll");
  };

  const activeAnim = () => {
    const menuMobilOpen = document.querySelector(".menuMobilOpen");
    menuMobilOpen.style.animation = "reverse;";
  };

  const setTime = () => {
    setIsOpenMenu(!isOpenMenu);
    console.log("Funciona");
  };

  return (
    <div>
      <div className="iconMenu">
        {!isOpenMenu ? (
          <img
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
              showMenu();
            }}
            src="assets/menu.png"
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      {isOpenMenu ? (
        <div className="menuMobil">
          <div
            className={`${
              isOpenMenu ? "menuMobil_container" : "menuMobil_container_close"
            }`}
          >
            <div className="menuMobilOpen">
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
                <div className="logo">
                  <img src="assets/logo.png" alt="" />
                </div>

                <div className="content_info">
                  <h2 onClick={() => navigate("/nuestrasCanciones")}>NUESTRAS CANCIONES</h2>
                  <h2>TIENDA</h2>
                  <h2 onClick={() => navigate("descargables")}>DESCARGABLES</h2>

                  <div className="content_info_icons">
                    <div className="youtube"></div>
                    <div className="spotify"></div>
                    <div className="instagram"></div>
                    <div className="facebook"></div>
                  </div>
                </div>

                <div className="logoDino">
                  <img src="assets/dino2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuMobil;
