import Link from "next/link";
import React from "react";

const BannerOne = () => {
  return (
    <div
      className="banner-area bg-relative banner-area-1"
      style={{ backgroundImage: 'url("./assets/img/banner/3.png")' }}
    >
      <img className="chain-style" src="assets/img/banner/5.png" alt="img" />
      <img
        className="chain-style right-to-left-move"
        src="assets/img/banner/5.png"
        alt="img"
      />
      <div className="container">
        <div className="row" style={{alignItems: "center"}}>
          <div className="col-lg-5">
            <div className="banner-content">
              <h2 className="title move-line-3d ">
                <span
                  className="light"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{ fontWeight: 600 }}
                >
                  Yo, What's the <span style={{ color: "#DDF247" }}>Vibe?</span>
                  <img
                    className="line-img"
                    src="assets/img/banner/4.png"
                    alt="img"
                  />
                </span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="600" style={{ color: "#fff" }}>
                Tired of searching for the perfect sticker? Urgh, same. <span style={{ color: "#DDF247" }}>Snappy's</span> here to drop the mic on that whole scene. Just type, and we'll whip up a sticker that's pure you. No cap.
              </p>
       
        
            </div>
          </div>
          <div
            className="col-lg-7 mt-lg-0 mt-5"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <div className="banner-img text-lg-end top_image_bounce">
              <img src="assets/img/banner/2.png" alt="img" />
              {/* <img
                className="shape-img  shapeBlinker_img"
                src="assets/img/banner/6.png"
                alt="img"
              /> */}
              {/* <img
                className="shape-img-2 spin_image"
                src="assets/img/banner-2/2.png"
                alt="img"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
