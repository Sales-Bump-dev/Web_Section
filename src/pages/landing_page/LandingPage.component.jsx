import React from "react";

import Footer from "../../components/footer/Footer.component";
import Card from "../../components/card/Card.component";
import Logo from "../../components/logo/Logo.component";

import { ReactComponent as HouseFree } from "../../assets/images/house-free.svg";
import { ReactComponent as HousePremium } from "../../assets/images/house-premium.svg";

import { ReactComponent as MarkIcon } from "../../assets/icons/mark.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as PlayStoreIcon } from "../../assets/icons/playstore.svg";

const LandingPage = () => {
  return (
    <div class="landing_page">
      {/* Section - TopMost Section */}
      <div className="section--topmost-bg"></div>
      <section className="section section--topmost">
        <nav className="section--topmost-nav">
          <Logo />
          <div className="section--topmost-nav-right">
            <div className="nav-item">DOWNLOAD</div>
            <div className="nav-item">LOG IN</div>
            <div className="nav-item">SIGN UP</div>
          </div>
        </nav>

        <div className="section--topmost-main">
          <div className="prominent-text">
            Online Store Management Made Easy!
          </div>
          <div className="lighter-text">
            Set and manage your store online with ease
          </div>
          <a href="" className="get-started-btn">
            GET STARTED
          </a>
        </div>

        <div className="section--topmost-image"></div>
      </section>

      {/* ----------END Section - TopMost Section ---------- */}
      {/* Section- Control everything from your store */}
      <section className="section section--control_everything">
        <div className="section-header">
          <div className="section-header-extra"></div>
          <div className="prominent-text">
            Control everything from your store
          </div>
          <div className="lighter-text">
            Zeus is a comprehensive platform on the market combining good
            performance, flexibility and ease of use to give a pleasurable
            experience
          </div>
        </div>
        <div className="offers">
          <div className="offer offer-ease">
            <div className="offer-ease-img"></div>
            <div className="prominent-text">Ease of Use</div>
            <div className="lighter-text">
              Create and manage your store seamlessly
            </div>
          </div>
          <div className="offer offer-two_way">
            <div className="offer-two_way-img"></div>
            <div className="prominent-text">2-way Interaction</div>
            <div className="lighter-text">
              Give yourself a competitive advantage by being able to interact
              with customers from anywhere
            </div>
          </div>
          <div className="offer offer-ready-made">
            <div className="offer-ready-made-img"></div>
            <div className="prominent-text">Ready Made</div>
            <div className="lighter-text">
              Manage and track store activities with little or no technical
              knowledge
            </div>
          </div>
          <div className="offer offer-update">
            <div className="offer-update-img"></div>
            <div className="prominent-text">Update</div>
            <div className="lighter-text">
              Get updates about your desired products from a variety of stores
            </div>
          </div>

          <div className="offer-join">
            <div className="prominent-text"> Join then inner Circle</div>
            <div className="lighter-text">
              Stay updated with latest products, stores and discounts
            </div>
            <div className="offer-join-input_container">
              <div className="offer-join-input" contentEditable>
                Email Address
              </div>
              <div className="offer-join-input_btn">Subscribe</div>
            </div>
          </div>
        </div>
      </section>

      {/* --------END Section- Control everything from your store------ */}

      <section className="section section--wave">
        {/* Header style */}
        <div className="section-header">
          <div className="section-header-extra"></div>
          <div className="prominent-text">Create your store</div>
          <div className="lighter-text">
            Get the best out your business with Zeus
          </div>
        </div>
        {/* ----------------------- */}
        {/* main part on the wavy background */}
        <div className="section--wave-main">
          <div className="section--wave-main-cards">
            <div className="card-1">
              <Card>
                <HouseFree />
                <div className="price">
                  <span class="dollar">&#36;</span>{" "}
                  <span className="amount">00.00</span>{" "}
                  <span className="permonth">/mo</span>
                </div>
                <p className="free_or_paid">FREE</p>

                {/* Benefits for free mode */}
                <div className="benefit">
                  <span class="mark_icon">
                    <MarkIcon /> Monthly Notifications on updates
                  </span>
                </div>

                <div className="benefit">
                  <span class="mark_icon">
                    <MarkIcon /> Social Media Publicity
                  </span>
                </div>

                <div className="benefit">
                  <span class="mark_icon">
                    <MarkIcon /> Email Support
                  </span>
                </div>

                <a href="" className="card--btn">
                  GET STARTED
                </a>
              </Card>
            </div>
            <div className="card-2">
              <Card>
                <HousePremium />
                <div className="price">
                  <span class="dollar">&#36;</span>{" "}
                  <span className="amount">39.99</span>{" "}
                  <span className="permonth">/mo</span>
                </div>
                <p className="free_or_paid">PREMIUM</p>

                <p className="pre-benefits">FREE FEATURES</p>
                <div className="plus">+</div>
                {/* Benefits for premium mode */}
                <div className="benefit">
                  <span class="mark_icon">
                    <MarkIcon /> Project participations
                  </span>
                </div>

                <div className="benefit">
                  <span class="mark_icon">
                    <MarkIcon /> Website/Logo design
                  </span>
                </div>

                <div className="benefit">
                  <span class="mark_icon">
                    <MarkIcon /> Full Branding
                  </span>
                </div>

                <a href="" className="card--btn">
                  GET STARTED
                </a>
              </Card>
            </div>
          </div>

          {/* Subsection - Take your business everywhere you go*/}
          <div className="subsection_everywhere">
            <div className="subsection_everywhere-main">
              <div className="subsection_everywhere-main--extra"></div>
              <div className="prominent-text">
                Take your business everywhere with you
              </div>
              <div className="lighter-text">
                Manage order, communicate with customers,
                <span>
                  &nbsp;upload products to your online store directly from the
                  mobile app
                </span>
              </div>
              <div className="text-download">Download App Now</div>
              <div className="btns">
                <a href="" className="download-btn download-btn--playstore">
                  <PlayStoreIcon />
                  <span class="download-btn-text">Google Play</span>
                </a>
                <a href="" className="download-btn download-btn--appstore">
                  <AppleIcon />
                  <span class="download-btn-text">App Store</span>
                </a>
              </div>
            </div>

            <div className="subsection_everywhere-phone">
              <img src="/assets/phone.svg" alt="Phone" />
            </div>
          </div>
          {/* -------------------------------------------------- */}
        </div>
      </section>
      <section className="section section--get_started get_started">
        <div className="get_started--content">
          <div className="get_started--content-extra"></div>
          <div className="prominent-text">Get started for free</div>
          <div className="lighter-text">No credit Card required</div>
          <a href="" className="get_started--content-btn">
            GET STARTED
          </a>
        </div>
        <div className="get_started--image">
          <div className="water-container">
            {/* <picture>
              <source
                srcSet="/assets/office-sm.svg"
                media="(max-width: 480px)"
              />
              
            </picture> */}
            <img src="/assets/office.svg" alt="Office" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
