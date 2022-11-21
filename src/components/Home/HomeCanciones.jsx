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

  useEffect(() => {
    getSongs().then((data) => setAllSongs(data.data));
  }, []);


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
            >
              <div className="anim">
                {allSongs.map((item) => {
                  return (
                    <SwiperSlide className="containerCard" key={item.id}>
                      <div className="contentCard">
                        <div className="card">
                          <div className="contentImg">
                            <img src={item.portada?.url} alt="" />
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
