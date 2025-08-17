import Link from "next/link";
import React from "react";

const HelpCenterInner = () => {
  return (
    <div className="creator-details-area pd-top-120" id="faq">
      <div className="container">
        <div className="text-center mg-bottom-20">
          <h3>
            FAQs
          </h3>
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
                    What Is A Non Fin Bun Ticket
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
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
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
                    Where I check Bun Ticket
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
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
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
                    Kind Of NFT Marketplace
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
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
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
                    Exclusive Payment Constrac &amp; Wallet
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
                    NFT Reality Free item's accordion body. the Lorem ipsum
                    dolor sit amet, elit. Eligendi expedita molestias ab ut ea
                    vitae eum ipsa velit does limit overflow.
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
