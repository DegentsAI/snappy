import Link from "next/link";
import React from "react";

const FooterOne = () => {
  return (
    <footer
      className="footer-area footer-area-1 pd-top-110"
      style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
    >
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p>© 2025 By Snappy, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
