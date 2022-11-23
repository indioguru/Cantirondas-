import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Descargables from "../components/Descargables/Descargables";
import DescargablesList from "../components/Descargables/DescargablesList";
import Home from "../components/Home/Home";
import { Logo } from "../components/Logo/Logo";
import MenuMobil from "../components/Menu/MenuMobil";
import NuestrasCanciones from "../components/NuestrasCanciones/NuestrasCanciones";
import NuestrasCancionesLista from "../components/NuestrasCanciones/NuestrasCancionesLista";

const RouterController = () => {
  
    
  const showMenu = () => {
    const body = document.querySelector("body");
    const menuMobil = document.querySelector(".menuMobil");
    body.classList.toggle("noScroll");
    menuMobil.classList.toggle("menuShow");
  };

  return (
    <HashRouter>
      <Logo showMenu={showMenu} />
      <MenuMobil showMenu={showMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestrasCanciones" element={<NuestrasCanciones />} />
        <Route
          path="/nuestrasCancionesLista"
          element={<NuestrasCancionesLista />}
        />
        <Route path="/descargables" element={<Descargables />} />
        <Route path="/descargablesLista" element={<DescargablesList />} />
        {/* <Route path="/param/:id" element={<ParamDetail />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default RouterController;
