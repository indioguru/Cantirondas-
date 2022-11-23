import React, { useEffect, useState } from "react";
import { getSongs, pageSongs } from "../../api/api";
import { useNavigate } from "react-router-dom";
import MenuMobil from "../Menu/MenuMobil";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
const NuestrasCanciones = () => {
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
  }, []);

  return (
    <div className="nuestrasCanciones">
      {loading && <Loader />}

      <MenuMobil />
      <div className="arrow">
        <img onClick={() => navigate("/")} src="assets/atras.png" alt="" />
      </div>
      <div className="nuestrasCanciones_container">
        <div className="logo">
          <img src="assets/logo.png" alt="" />
        </div>

        <div className="buttonBackIcon">
          <div
            onClick={() => navigate("/nuestrasCancionesLista")}
            className="buttonBackIcon_content"
          >
            <img className="imgButton" src="/assets/lista.png" alt="" />
            <h1 className="textButton">
              VER <br /> LISTA
            </h1>
          </div>
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

        <div className="destok">
          {ourSongs.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card_container">
                  <div className="cardfront">
                    <div className="contentImg">
                      <iframe
                        className="iframe"
                        srcDoc={`
                      <style>
                          img{object-fit:cover}
                          *{padding:0;margin:0;overflow:hidden}
                          html,body{height:100%;}
                          .img1{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                          .img2{position:absolute;width:50px;top:0;bottom:0;margin:auto; left:0;  right: 0;}
                          span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                          span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
                      </style>
                      <a href=${item.url_YOUTUBE}> 
                          <img class = "img1" src=${item.portada?.url}>
                          <img class = "img2"  src="assets/playlist.png" />
                    
                      </a>
                        `}
                        src={`${item.url_YOUTUBE}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        muted
                        autoPlay
                      ></iframe>
                    </div>
                    <h2 className="text1">{item.titulo}</h2>
                    <p className="text2"> {item.descripcion}</p>

                    <div className="contentIcons">
                      {item.url_YOUTUBE ? (
                        <a href={url_YOUTUBE}>
                          <div className="yotube"></div>
                        </a>
                      ) : (
                        ""
                      )}
                      {item.url_SPOTIFY ? (
                        <a href={url_SPOTIFY}>
                          <div className="spo"></div>
                        </a>
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
          <div className="buttonVerLista_anim">
            <button onClick={() => navigate("/nuestrasCancionesLista")}>
              VER LISTA
            </button>
          </div>
        </div>
      </div>
      <Footer color="#8554fa" />
    </div>
  );
};

export default NuestrasCanciones;
