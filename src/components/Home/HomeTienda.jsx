import React from "react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/css/navigation";
import infoTienda from "./InfoTienda.json";
import { Swiper, SwiperSlide } from "swiper/react";
const HomeTienda = () => {
  return (
    <div className="home_tienda">
      <div className="home_tienda_container container_all">
        <div className="square_info">
          <div className="square">
            <div className="content_img">
              <img src="/assets/palmera.png" alt="palmera" />
            </div>
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD
              TEMPOR INCIDIDUNT.
            </p>
          </div>
        </div>

        <h1 className="title">TIENDA</h1>

        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper_tienda"
        >
          {infoTienda.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="display_flex">
                <div className="img">
                  <img src={item.img} alt="imagen" />
                </div>
                <div className="info">
                  <h1>{item.titulo}</h1>
                  <p>{item.parrafo}</p>
                  <h2>{item.precio}</h2>
                </div>
              </div>

              <div className="button_one">
                <button>COMPRAR</button>
              </div>

              <div className="button_two">
                <button>VER TIENDA</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTienda;
