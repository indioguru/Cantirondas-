import React, { useState } from "react";

const MenuMobil = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const showMenu = () => {
    const body = document.querySelector("body");
    body.classList.toggle("noScroll");
  };

  return (
    <div className="menuMobil">
      <div className="menuMobil_container">
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
          <div className="menuMobilOpen">
            <div className="buttonClose">
              <img
                onClick={() => {
                  setIsOpenMenu(!isOpenMenu);
                  showMenu();
                }}
                src="assets/x.png"
                alt=""
              />
            </div>

            <div className="logo">
              <img src="assets/logo.png" alt="" />
            </div>
            <h2>
              NUESTRAS <br /> CANCIONES
            </h2>
            <h2>TIENDA</h2>
            <h2>DESCARGABLES</h2>

            <div className="menuMobilOpen_icons">
              <img src="assets/Botones redes sociales/youtube.png" alt="" />
              <img src="assets/Botones redes sociales/spotify.png" alt="" />
              <img src="assets/Botones redes sociales/instagram.png" alt="" />
              <img src="assets/Botones redes sociales/facebook.png" alt="" />
            </div>

            <div className="logoDino">
              <img src="assets/dino2.png" alt="" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MenuMobil;
