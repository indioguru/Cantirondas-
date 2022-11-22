import React, { useEffect, useState } from "react";
import { getSongs } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/scss";
import "swiper/scss/pagination";

import Media from "react-media";
const HomeCanciones = () => {
  const navigate = useNavigate();
  const [allSongs, setAllSongs] = useState([]);
  const [color, setcolor] = useState(0);

  useEffect(() => {
    getSongs().then((data) => setAllSongs(data.data));
  }, []);

  const changeBackground = () => {
    const colors = ["#8554fa", "#01b4bb", "#fa8825"];

    if (color == 2) {
      setcolor(0);
    } else {
      setcolor(color + 1);
    }

    const howDowloads = document.querySelector(".home_songs");
    howDowloads.style.background = colors[color];
  };

  return (
    <div className="home_songs">
      <div className="home_songs_container">
        <div className="home_songs_container_destok">
          <div className="home_songs_container_destok_one">
            <h1>CANCIONES DESTACADAS</h1>
            <Media query="(min-width: 600px)">
              {(resolution) => {
                return resolution ? (
                  <div className="contetButtonPlaylistDestok">
                    <button onClick={() => navigate("/nuestrasCanciones")}>
                      VER PLAYLIST
                    </button>
                  </div>
                ) : (
                  ""
                );
              }}
            </Media>
          </div>

          <div className="home_songs_container_destok_two">
            <Swiper
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              onSlideChange={() => changeBackground()}
            >
              <div className="anim">
                {allSongs.map((item) => {
                  return (
                    <div className="conterAll">
                      {item.destacado ? (
                        <SwiperSlide className="containerCard" key={item.id}>
                          <div className="contentCard">
                            <div className="card">
                              <div className="contentImg">
                                <iframe
                                  className="iframe"
                                  srcDoc={`
                      <style>
                          img{object-fit:cover}
                          *{padding:0;margin:0;overflow:hidden}
                          html,body{height:100%;}
                          .img1{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                          .img2{position:absolute;width:50px;top:0;bottom:0;margin:auto; left:0;right: 0;}
                          span{position:absolute;width:100vw;height:100%;top:0;bottom:0;margin:auto}
                          span{height:1.5em;text-align:center;font:120px/1.5 sans-serif;color:#FF4D00;text-shadow:0 0 0.5em black}
                      </style>
                      <a href=${"https://www.youtube.com/embed/RYVQ0ZzL-tY"}> 
                          <img class = "img1" src=${item.portada?.url}>
                          <img class = "img2"  src="assets/playlist.png" />
                    
                      </a>
                        `}
                                  src={`${"https://www.youtube.com/embed/RYVQ0ZzL-tY"}`}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  muted
                                  autoPlay
                                ></iframe>
                              </div>
                              <h2 className="text1">{item.titulo}</h2>
                              <p className="text2">{item.descripcion}</p>

                              <div className="contentIcons">
                                {item.url_SPOTIFY ? (
                                  <div className="yotube"></div>
                                ) : (
                                  ""
                                )}
                                {item.url_YOUTUBE ? (
                                  <div className="spo"></div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>

        <Media query="(max-width: 600px)">
          {(resolution) => {
            return resolution ? (
              <div className="contetButtonPlaylist">
                <button onClick={() => navigate("/nuestrasCanciones")}>
                  VER PLAYLIST
                </button>
              </div>
            ) : (
              ""
            );
          }}
        </Media>
      </div>
    </div>
  );
};

export default HomeCanciones;
