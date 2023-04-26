import React from "react";
import Footer from "../Footer/Footer";
import HomeCanciones from "./HomeCanciones";
import HomeCantemosJuntos from "./HomeCantemosJuntos";
import HomeDescargables from "./HomeDescargables";
import HomeTienda from "./HomeTienda";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <HomeCantemosJuntos />
        <HomeCanciones />
        <HomeDescargables />
        <HomeTienda />
        <Footer color="#01b4bb" />
      </div>
    </div>
  );
};

export default Home;
