import React from "react";

export const Logo = ({ showMenu }) => {
  return (
    <div className="logo">
      <div className="iconMenu">
        <img
          onClick={() => {
            showMenu();
          }}
          src="assets/menu.png"
          alt=""
        />
      </div>
      <img className="img_logo" src="/assets/logo.png" alt="" />
    </div>
  );
};
