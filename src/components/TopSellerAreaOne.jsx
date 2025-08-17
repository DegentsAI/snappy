"use client";
import React, { useRef } from "react";
import Slider from "react-slick";

const TopSellerAreaOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    spaceBetween: 30,
    speed: 1000,
    loop: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="top-seller-area  pd-bottom-80 pd-top-200" id="about">
      <div className="container">
        <div className="section-title d-md-flex justify-content-between align-items-center">
          <div className="sticker-slider">
            <h3 className="title move-line-3d" data-aos="fade-up">
              Sticker-Fying Your Life,
              <span>One Vibe at a Time </span>
            </h3>
            <p>
              Snappy isn't just another sticker-maker; it's your new creative
              co-pilot. We turn your wild thoughts, inside jokes, and late-night
              meme ideas into lit stickers. Whether it's for your group chat,
              your brand, or just for fun, we got you.
            </p>
          </div>
          <div className="array-button slider-control-round mt-md-0 mt-4">
            <button
              className="array-next"
              onClick={() => sliderRef.current.slickNext()}
            >
              <i className="fa fa-angle-left" />
            </button>
            <button
              className="array-prev"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className="fa fa-angle-right" />
            </button>
          </div>
        </div>
        <div className="swiper top-seller-slider ">
          <div
            className="swiper-wrapper_inner"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Slider ref={sliderRef} {...settings}>
              <div className="swiper-slide">
                <div
                  className="top-seller-inner"
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className="top-seller-item d-flex align-items-center">
                    <div className="thumb">
                      <img src="assets/img/top-seller/1.png" alt="img" />
                    </div>
                    <div className="content">
                      <h5 className="tt-uppercase">Prompt</h5>
                      <span className="color-base mb-2 d-block">
                        A flying dog
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="top-seller-inner"
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className="top-seller-item d-flex  align-items-center">
                    <div className="thumb">
                      <img src="assets/img/top-seller/2.png" alt="img" />
                    </div>
                    <div className="content">
                      <h5 className="tt-uppercase">Prompt</h5>
                      <span className="color-base mb-2 d-block">
                        Dragon eating hot pizza
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="top-seller-inner"
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className="top-seller-item d-flex  align-items-center">
                    <div className="thumb">    
                      <img src="assets/img/top-seller/3.png" alt="img" />
                    </div>  
                    <div className="content">
                      <h5 className="tt-uppercase">Prompt</h5>
                      <span className="color-base mb-2 d-block">
                        Titanic sinking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
               <div className="swiper-slide">
                <div
                  className="top-seller-inner"
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className="top-seller-item d-flex  align-items-center">
                    <div className="thumb">    
                      <img src="assets/img/top-seller/4.png" alt="img" />
                    </div>  
                    <div className="content">
                      <h5 className="tt-uppercase">Prompt</h5>
                      <span className="color-base mb-2 d-block">
                       Jon Snow
from Game Of Thrones
                      </span>
                    </div>
                  </div>
                </div>
              </div>
               <div className="swiper-slide">
                <div
                  className="top-seller-inner"
                  style={{
                    backgroundImage: 'url("assets/img/top-seller/bg.png")',
                  }}
                >
                  <div className="top-seller-item d-flex  align-items-center">
                    <div className="thumb">    
                      <img src="assets/img/top-seller/5.png" alt="img" />
                    </div>  
                    <div className="content">
                      <h5 className="tt-uppercase">Prompt</h5>
                      <span className="color-base mb-2 d-block">
                       Few Pokemons
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellerAreaOne;
