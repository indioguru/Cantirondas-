import React, { useEffect, useState } from "react";
import { getSongs, pageSongs } from "../../api/api";
import { useNavigate } from "react-router-dom";
import MenuMobil from "../Menu/MenuMobil";
import Footer from "../Footer/Footer";
const NuestrasCanciones = () => {
  const navigate = useNavigate();
  const [ourSongs, setOurSongs] = useState([]);
  const [infoPage, setInfoPage] = useState([]);

  useEffect(() => {
    getSongs().then((data) => setOurSongs(data.data));
    pageSongs().then((data) => setInfoPage(data.data));
  }, []);

  return (
    <div className="nuestrasCanciones">
      <MenuMobil />
      <div className="nuestrasCanciones_container">
        <div className="logo">
          <img src="assets/logo.png" alt="" />
        </div>
        <h1 className="title">{infoPage.titulo}</h1>
        <div className="nuestrasCanciones_container_destok">
          <div className="nuestrasCanciones_container_destok_one">
            <div className="playlist">
              <h1>PLAYLIST</h1>
              <img src="assets/playlist.png" alt="" />
            </div>
          </div>

          <div className="nuestrasCanciones_container_destok_two">
            <p className="descripton">{infoPage.descripcion}</p>
          </div>
        </div>

        <div className="arrow">
          <img
            onClick={() => navigate("/")}
            src="/public/assets/atras.png"
            alt=""
          />
        </div>

        <div className="destok">
          {ourSongs.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card_container">
                  <div className="cardfront">
                    <div className="contentImg">
                      <img src={item.portada?.url} alt="" />
                    </div>
                    <h2 className="text1">{item.titulo}</h2>
                    <p className="text2"> {item.descripcion}</p>

                    <div className="contentIcons">
                      {item.url_SPOTIFY ? (
                        <img
                          src="assets/Botones redes sociales/spotify.png"
                          alt="So"
                        />
                      ) : (
                        ""
                      )}
                      {item.url_YOUTUBE ? (
                        <img
                          src="assets/Botones redes sociales/youtube.png"
                          alt="So"
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="buttonVerLista">
          <button onClick={() => navigate("/nuestrasCancionesLista")}>
            VER LISTA
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NuestrasCanciones;
