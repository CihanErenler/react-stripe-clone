import React from "react";
import phone from "../assets/phone.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import { useGlobalContext } from "../context";

function Hero() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="container">
        <div className="row">
          <div className="col-8 flex align-start justify-center flex-column h100">
            <div className="leading">
              Payments infrastructure for the internet
            </div>
            <p>
              Millions of businesses of all sizes—from startups to large
              enterprises—use Stripe’s software and APIs to accept payments,
              send payouts, and manage their businesses online.
            </p>
            <div className="button-container flex align-center">
              <a href="/start-now" className="btn btn-dark">
                start now
                <RiArrowRightSLine className="arrow-icon" />
              </a>
              <a href="/contact-sales" className="btn btn-norm">
                contact sales
                <RiArrowRightSLine className="arrow-icon" />
              </a>
            </div>
          </div>
          <div className="col-4 flex justify-end">
            <img className="phone-img" src={phone} alt="phone" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
