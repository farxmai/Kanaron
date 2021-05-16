import React from "react";
import "./Footer.css";

function Header() {
  const token = localStorage.getItem("token");
  return (
    <footer>
      <div className="footer-panel-text">
        <div className="footer-text">Home</div>
        <div className="footer-text">About</div>
        <div className="footer-text">Privacy Policy</div>
        <div className="footer-text">Terms of Use</div>
      </div>
      <div className="footer-text">Created by Farxmai in 2020</div>
    </footer>
  );
}

export default Header;
