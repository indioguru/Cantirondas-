import React, { useEffect, useState } from "react";
import { getInfoHome } from "../../api/api";

const HomeCantemosJuntos = () => {
  const [dataHome, setDataHome] = useState([]);

  useEffect(() => {
    getInfoHome().then((data) => setDataHome(data?.data));
  }, []);

  return (
    <div className="home_header">
      <div className="home_header_container container_all">
        <div className="home_header_container_one">
          <div className="title">
            <h3>{dataHome.texto_BIENVENIDA}</h3>
            <h2>¡CANTEMOS JUNTOS!</h2>
          </div>
          <div className="contenTexts">
            <div className="anim">
              <div className="contenTextTwo">
                <div className="welcomeTextTwo">
                  <h5>{dataHome.texto_BIENVENIDA_2}</h5>
                  <img src="assets/dino.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCantemosJuntos;
