import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageDownloads, downloads } from "../../api/api";
import Footer from "../Footer/Footer";
import MenuMobil from "../Menu/MenuMobil";
const Descargables = () => {
  const navigate = useNavigate();
  const [infoPage, setInfoPage] = useState([]);
  const [infoDownloads, setInfoDownloads] = useState([]);
  useEffect(() => {
    pageDownloads().then((data) => setInfoPage(data.data));
    downloads().then((data) => setInfoDownloads(data.data));
  }, []);

  return (
    <div className="descargables">
      <MenuMobil/>
      <div className="descargables_container">
        <div className="descargables_container_arrow">
        <img
            onClick={() => navigate("/")}
            src="/public/assets/atras.png"
            alt=""
          />
        </div>

      

        <div className="descargables_container_logo">
          <img src="assets/logo.png" alt="" />
        </div>

        <div className="descargables_container_info">
          <h1>{infoPage.titulo}</h1>
          <p>{infoPage.descripcion}</p>
        </div>

        <div className="descargables_container_cards">
          {infoDownloads.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card_container">
                  <div className="cardfront">
                    <div className="contentImg">
                      <img src={item.portada?.url} alt="" />
                    </div>
                    <h2 className="text1">{item.titulo}</h2>
                    <p className="text2"> {item.descripcion}</p>
                    <div className="buttonDescargar">
                      <button>DESCARGAR</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="descargables_container_buttonVerLista">
          <button onClick={() => navigate("/descargablesLista")}>
            VER LISTA
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Descargables;
