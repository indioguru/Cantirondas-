import React from "react";
import { useNavigate } from "react-router-dom";

export const Logo = ({ showMenu }) => {
  const navigate = useNavigate();
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
      <img
        onClick={() => navigate("/")}
        className="img_logo"
        src="/assets/logo.png"
        alt=""
      />
    </div>
  );
};
