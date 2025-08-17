import Link from "next/link";
import React from "react";

const AboutAreaOne = () => {
  return (
    <div
      className="about-area position-relative bg-cover pd-top-120 pd-bottom-70"
     id="why"
    >
      <div className="container">
        <h2 style={{textAlign: "center"}}>Why <span style={{color: "#DDF247",}}>Snappy</span> Slaps</h2>
        <div className="row why-row">
          <div className="col-lg-6 col-sm-6 mg-bottom-20">
            <div
              className="game-single-level text-center p-4 fade-slide bottom"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="assets/img/about/3.png" alt="img" />
              <p>
                We're faster than your friend replying to a meme. Get your
                custom sticker in seconds.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mg-bottom-20">
            <div
              className="game-single-level text-center p-4 fade-slide bottom"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img src="assets/img/about/4.png" alt="img" />
              <p>
                Want it to look like a cartoon? Or maybe a watercolor painting?
                We've got a whole mood board of styles.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mg-bottom-20">
            <div
              className="game-single-level text-center p-4 fade-slide bottom"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src="assets/img/about/5.png" alt="img" />
             
              <p>
                All our stickers come with a transparent background, so they're
                ready to slide into any chat or design.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 mg-bottom-20">
            <div
              className="game-single-level text-center p-4 fade-slide bottom"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img src="assets/img/about/6.png" alt="img" />
            
              <p>
                You don't need to be an artist to make art. Our AI handles the
                heavy lifting, so you can just chill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaOne;
