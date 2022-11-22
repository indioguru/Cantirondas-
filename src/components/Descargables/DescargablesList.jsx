import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import MenuMobil from "../Menu/MenuMobil";
import { downloads, pageSongs } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const DescargablesList = () => {
  const navigate = useNavigate();
  const [downloadsInfo, setDownloadsInfo] = useState([]);
  const [infoPage, setInfoPage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    pageSongs().then((data) => {
      setInfoPage(data.data);
    });
    downloads().then((data) => {
      setDownloadsInfo(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="descargablesLista">
      {loading && <Loader />}
      <MenuMobil />

      <div className="arrow">
        <img
          onClick={() => navigate("/descargables")}
          src="assets/atras.png"
          alt=""
        />
      </div>
      <div className="descargablesLista_container">
        <div className="descargablesLista_container_logo">
          <img src="assets/logo.png" alt="" />
        </div>

        <div className="descargablesLista_container_title">
          <h1>DESCARGABLES</h1>
        </div>

        <div className="description">
          <p>{infoPage.descripcion}</p>
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
          <div className="descargablesLista_container_buttonFichas_anim">
            <button onClick={() => navigate("/descargables")}>
              VER FICHAS
            </button>
          </div>
        </div>
      </div>
      <Footer color="#01b4bb" />
    </div>
  );
};

export default DescargablesList;
