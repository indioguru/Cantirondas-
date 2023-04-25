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
    </div>
  );
};

export default MenuMobil;
