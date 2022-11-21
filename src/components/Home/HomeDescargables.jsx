import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { downloads } from "../../api/api";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";
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
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {downloadsInfo.map((item) => {
              return (
                <SwiperSlide className="card" key={item.id}>
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
                      <button>DESCARGAR</button>
                    </div>

                    <div className="buttonVerTodo">
                      <button onClick={() => navigate("/descargables")}>
                        VER TODOS
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeDescargables;
