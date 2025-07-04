import React, { useEffect, useState } from "react";
import { getSongs, pageSongs } from "../../api/api";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
const NuestrasCancionesLista = () => {
  const navigate = useNavigate();
  const [ourSongs, setOurSongs] = useState([]);
  const [infoPage, setInfoPage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getSongs().then((data) => setOurSongs(data.data));
    pageSongs().then((data) => {
      setInfoPage(data.data);
      setLoading(false);
    });

    document.title = "Nuestras Canciones lista";
  }, []);

  return (
    <div className="nuestrasCancionesLista">
      {loading && <Loader />}

      <div className="buttonBackIcon">
        <div
          onClick={() => navigate("/nuestrasCanciones")}
          className="buttonBackIcon_content"
        >
          <img className="imgButton" src="/assets/tarjetas.png" alt="" />
          <h1 className="textButton">
            VER <br />
            portadas
          </h1>
        </div>
      </div>
      <div className="nuestrasCancionesLista_container">
        <div className="arrow">
          <img
            onClick={() => navigate("/nuestrasCanciones")}
            src="assets/atras.png"
            alt=""
          />
        </div>
        <h1 className="title">{infoPage.titulo}</h1>

        <div className="nuestrasCancionesLista_container_destok">
          <div className="nuestrasCancionesLista_container_destok_one">
            <div className="playlist">
              <h1>PLAYLIST</h1>
              <img src="assets/playlist.png" alt="" />
            </div>
          </div>

          <div className="nuestrasCancionesLista_container_destok_two">
            <div className="descripcion">
              <p>{infoPage.descripcion}</p>
            </div>
          </div>
        </div>

        <div className="descargablesLista_container_info">
          {ourSongs.map((item, i) => {
            return (
              <div key={i} className="listDownload">
                <a target="_blank" href={item.url_YOUTUBE}>
                  <h1>{item.titulo}</h1>
                </a>
              </div>
            );
          })}
        </div>

        <div className="buttonPortadas">
          <div className="buttonPortadas_anim">
            <button
              className="ga4-call_to_action-ver_portadas"
              onClick={() => navigate("/nuestrasCanciones")}
            >
              REGRESAR
            </button>
          </div>
        </div>
      </div>
      <Footer color="#fa8825" />
    </div>
  );
};

export default NuestrasCancionesLista;
