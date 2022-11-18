import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { downloads } from "../../api/api";
import "swiper/scss";
import "swiper/scss/pagination";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const HomeDescargables = () => {
  const navigate = useNavigate();
  const [downloadsInfo, setDownloadsInfo] = useState([]);

  useEffect(() => {
    downloads().then((data) => setDownloadsInfo(data.data));
  }, []);

  console.log(downloadsInfo);
  return (
    <div className="home_downloads">
      <div className="home_downloads_container">
        <div className="textReferenceOne">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
          </p>
          <img src="/public/assets/rodadero.png" alt="" />
        </div>

        <h1 className="title">DESCARGABLES</h1>

        <div className="home_downloads_container_destok">
          <div className="home_downloads_container_destok_one">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >

              
              {downloadsInfo.map((item) => {
                return (
                  <SwiperSlide className="card" key={item.id}>
                    <div className="card_container">
                      <div className="cardfront">
                        <div className="contentImg">
                          <img src={item.portada?.url} alt="" />
                        </div>
                        <h2 className="text1">{item.titulo}</h2>
                        <p className="text2"> {item.descripcion}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="home_downloads_container_destok_two">
            <div className="buttonDescargas">
              <button>DESCARGAR</button>
            </div>

            <div className="buttonVerTodo">
              <button onClick={() => navigate("/descargables")}>
                VER TODOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDescargables;
