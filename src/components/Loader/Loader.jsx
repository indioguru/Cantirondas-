import React, { useEffect } from "react";

const Loader = () => {
  // const showMenu = () => {
  //   const body = document.querySelector("body");
  //   body.classList.toggle("noScroll");
  // };

  // useEffect(() => {
  //   showMenu();
  // }, []);

  return (
    <div className="overlay"> 
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
