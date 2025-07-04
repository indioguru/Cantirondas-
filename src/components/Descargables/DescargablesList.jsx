import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { downloads, pageDownloads } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const DescargablesList = () => {
  const navigate = useNavigate();
  const [downloadsInfo, setDownloadsInfo] = useState([]);
  const [infoPage, setInfoPage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    pageDownloads().then((data) => {
      setInfoPage(data.data);
    });
    downloads().then((data) => {
      setDownloadsInfo(data.data);
      setLoading(false);
    });

    document.title = "Descargables lista";
  }, []);

  return (
    <div className="descargablesLista">
      {loading && <Loader />}
      <div className="descargablesLista_container">
        <div className="buttonBackIcon">
          <div
            onClick={() => navigate("/descargables")}
            className="buttonBackIcon_content"
          >
            <img className="imgButton" src="/assets/tarjetas.png" alt="" />
            <h1 className="textButton">
              VER <br />
              portadas
            </h1>
          </div>
        </div>

        <div className="arrow">
          <img onClick={() => navigate("/descargables")} src="/assets/atras.png" alt="" />
        </div>
        <div className="descargablesLista_container_title">
          <h1>DESCARGABLES</h1>
        </div>

        <div className="description">
          <p>{infoPage.descripcion}</p>
        </div>

        <div className="descargablesLista_container_info">
          {downloadsInfo.map((item, i) => {
            return (
              <div key={i} className="listDownload">
                <a
                  className="ga4-call_to_action-redes_descargar"
                  target="_blank"
                  href={item.descargable}
                >
                  <h1>{item.titulo}</h1>
                </a>
              </div>
            );
          })}
        </div>

        <div className="descargablesLista_container_buttonFichas">
          <div className="descargablesLista_container_buttonFichas_anim">
            <button
              className="ga4-call_to_action-ver_portadas"
              onClick={() => navigate("/descargables")}
            >
              REGRESAR
            </button>
          </div>
        </div>
      </div>
      <Footer color="#01b4bb" />
    </div>
  );
};

export default DescargablesList;
