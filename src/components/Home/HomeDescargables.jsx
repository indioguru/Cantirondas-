import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { downloads } from "../../api/api";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const HomeDescargables = () => {
  const navigate = useNavigate();
  const [downloadsInfo, setDownloadsInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color, setcolor] = useState(0);
  useEffect(() => {
    setLoading(true);
    downloads().then((data) => {
      setDownloadsInfo(data.data);
      setLoading(false);
    });
  }, []);

  console.log(downloadsInfo);

  const changeBackground = () => {
    const colors = ["#01BB77", "#0184bb", "#fa5456"];

    if (color == 2) {
      setcolor(0);
    } else {
      setcolor(color + 1);
    }

    const howDowloads = document.querySelector(".home_downloads");
    howDowloads.style.background = colors[color];
  };

  return (
    <div className="home_downloads">
      {loading && <Loader />}
      <div className="home_downloads_container">
        <div className="anim2">
          <div className="textReferenceOne">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum
            </p>
            <img src="assets/rodadero.png" alt="" />
          </div>
        </div>

        <h1 className="title">DESCARGABLES</h1>

        <div className="home_downloads_container_destok">
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={() => changeBackground()}
          >
            {downloadsInfo.map((item) => {
              return (
                <div className="conterAll" key={item.id}>
                  {item.destacado ? (
                    <SwiperSlide className="card">
                      {item.destacado}
                      <div className="destok_one">
                        <div className="card_container">
                          <div className="cardfront">
                            <div className="contentImg">
                              <img src={item.portada?.url} alt="" />
                            </div>
                            <h2 className="text1">{item.titulo}</h2>
                            <p className="text2"> {item.descripcion}</p>
                          </div>
                        </div>
                      </div>

                      <div className="destok_two">
                        <div className="buttonDescargas">
                          <a
                            download="logo"
                            href={item.descargable.url}
                            title="Imagen"
                          >
                            DESCARGAR
                          </a>
                        </div>

                        <div className="buttonVerTodo">
                          <button onClick={() => navigate("/descargables")}>
                            VER TODOS
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeDescargables;
