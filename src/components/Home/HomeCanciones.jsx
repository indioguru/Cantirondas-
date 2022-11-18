import React, { useEffect, useState } from "react";
import { getSongs } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import "./styles.css";
import Media from "react-media";
const HomeCanciones = () => {
  const navigate = useNavigate();
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    getSongs().then((data) => setAllSongs(data.data));
  }, []);

  console.log(allSongs);

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
              {allSongs.map((item, i) => {
                return (
                  <SwiperSlide className="containerCard" key={item.id}>
                    <div className="contentCard">
                      <div className="card">
                        <div key={item.id} className="featuredSongs">
                          <div className="contentImg">
                            <img src={item.portada?.url} alt="" />
                          </div>
                          <h2>{item.titulo}</h2>
                          <p>{item.descripcion}</p>
                        </div>
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
                  </SwiperSlide>
                );
              })}
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
