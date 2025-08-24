import Link from "next/link";
import React from "react";

const HelpCenterInner = () => {
  return (
    <div className="creator-details-area pd-top-120" id="faq">
      <div className="container">
        <div className="text-center mg-bottom-20">
          <h3>FAQs</h3>
        </div>
        <div className="row">
          <div
            className="offset-lg-2 col-lg-8 ps-xl-4 "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="accordion-wrapper" id="accordionExample">
              <div className="ticket-accordion accordion-items">
                <h2 className="accordion-headers" id="headingOne">
                  <button
                    className="accordion-buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What even is Snappy? Is it magic?
                    <i className="fa fa-angle-down down-arrow" />
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Snappy is your new AI bestie. It's a next-gen AI sticker
                    generator that turns your text prompts into fire stickers in
                    seconds. It’s not magic, but it's pretty close. Think of it
                    as a vibe check for your keyboard.
                  </div>
                </div>
              </div>
              <div className="ticket-accordion accordion-items">
                <h2 className="accordion-headers" id="headingTwo">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Is it really free to use? No cap?
                    <i className="fa fa-angle-down down-arrow" />
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    For real, for real. You can create a bunch of stickers for
                    free to get a feel for the magic. We've got bigger plans for
                    the future, but for now, you can flex your creative muscle
                    without dropping a single coin.
                  </div>
                </div>
              </div>
              <div className="ticket-accordion accordion-items">
                <h2 className="accordion-headers" id="headingThree">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What if my prompt is wild? Can Snappy handle it?
                    <i className="fa fa-angle-down down-arrow" />
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We love a good challenge! Whether you want "a squirrel DJing
                    at a rave" or "a sad potato wearing a tiny crown," Snappy's
                    AI is built to turn your weirdest, most niche ideas into
                    something lit. Just be creative—we'll handle the rest.
                  </div>
                </div>
              </div>
              <div className="ticket-accordion accordion-items">
                <h2 className="accordion-headers" id="headingFour">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can I use these stickers everywhere, like on WhatsApp,
                    Discord, or my brand stuff?
                    <i className="fa fa-angle-down down-arrow" />
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yesss! Once you download your stickers, they're yours to
                    own. You can slap them on your chats, use them in your
                    server, or even on your projects. They come with a
                    transparent background (PNG), so they're ready to go
                    wherever you are.
                  </div>
                </div>
              </div>
              <div className="ticket-accordion accordion-items">
                <h2 className="accordion-headers" id="headingFour">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    I generated a sticker, but it's not quite the vibe I wanted.
                    What gives?
                    <i className="fa fa-angle-down down-arrow" />
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    No worries, that happens! Our AI is learning, but sometimes
                    it needs a little nudge. Try tweaking your prompt—add more
                    details, specify a style, or change a word. You can also
                    generate again to get a fresh batch of options. Keep trying,
                    you'll get that perfect sticker.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterInner;
