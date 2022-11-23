import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pageDownloads, downloads } from "../../api/api";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const Descargables = () => {
  const navigate = useNavigate();
  const [infoPage, setInfoPage] = useState([]);
  const [infoDownloads, setInfoDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    pageDownloads().then((data) => setInfoPage(data.data));
    downloads().then((data) => {
      setInfoDownloads(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="descargables">
      {loading && <Loader />}

      <div className="descargables_container">
        <div className="arrow">
          <img onClick={() => navigate("/")} src="assets/atras.png" alt="" />
        </div>

        <div className="descargables_container_info">
          <h1>{infoPage.titulo}</h1>
          <p>{infoPage.descripcion}</p>
        </div>
      
        <div className="buttonBackIcon">
          <div
            onClick={() => navigate("/descargablesLista")}
            className="buttonBackIcon_content"
          >
            <img className="imgButton" src="/assets/lista.png" alt="" />
            <h1 className="textButton">
              VER <br /> LISTA
            </h1>
          </div>
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
                      <button
                        onClick={() => (
                          <a href={`${item.descargable.url}`} download></a>
                        )}
                      >
                        DESCARGAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="descargables_container_buttonVerLista">
          <div className="descargables_container_buttonVerLista_anim">
            <button onClick={() => navigate("/descargablesLista")}>
              VER LISTA
            </button>
          </div>
        </div>
      </div>

      <Footer color="#fa5456" />
    </div>
  );
};

export default Descargables;
