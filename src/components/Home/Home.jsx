import React from "react";
import Footer from "../Footer/Footer";
import MenuMobil from "../Menu/MenuMobil";
import HomeCanciones from "./HomeCanciones";
import HomeCantemosJuntos from "./HomeCantemosJuntos";
import HomeDescargables from "./HomeDescargables";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <MenuMobil />
        <HomeCantemosJuntos />
        <HomeCanciones />
        <HomeDescargables />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
