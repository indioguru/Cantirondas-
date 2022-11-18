import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import MenuMobil from "../Menu/MenuMobil";
import { downloads } from "../../api/api";
import { useNavigate } from "react-router-dom";

const DescargablesList = () => {

  const navigate = useNavigate();
  const [downloadsInfo, setDownloadsInfo] = useState([]);

  useEffect(() => {
    downloads().then((data) => setDownloadsInfo(data.data));
  }, []);

  return (
    <div className="descargablesLista">
      <MenuMobil />
      <div className="descargablesLista_container">

      <div className="descargablesLista_container_arrow">
        <img
            onClick={() => navigate("/descargables")}
            src="/public/assets/atras.png"
            alt=""
          />
        </div>
        <div className="descargablesLista_container_logo">
          <img src="assets/logo.png" alt="" />
        </div>

        <div className="descargablesLista_container_title">
          <h1>DESCARGABLES</h1>
        </div>

        <div className="descargablesLista_container_info">
          {downloadsInfo.map((item) => {
            return (
              <div key={item.id} className="listDownload">
                <h1>{item.titulo}</h1>
              </div>
            );
          })}
        </div>

        <div className="descargablesLista_container_buttonFichas">
          <button onClick={() => navigate("/descargables")}>VER FICHAS</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DescargablesList;
