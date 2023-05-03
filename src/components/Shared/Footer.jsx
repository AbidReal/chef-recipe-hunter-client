import React from "react";

const Footer = () => {
  return (
    <div className=" bg-foot  ">
      <footer className="footer mt-10 p-10 bg-neutral text-neutral-content custom-container lg:justify-between">
        <div>
          <span className="footer-title text-3xl lg:text-3xl ">Services</span>
          <a className="link link-hover text-xl lg:text-base ">Reservation</a>
          <a className="link link-hover text-xl lg:text-base ">Order</a>
          <a className="link link-hover text-xl lg:text-base ">Delivery</a>
          <a className="link link-hover text-xl lg:text-base ">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-3xl ">Company</span>
          <a className="link link-hover text-xl lg:text-base ">About us</a>
          <a className="link link-hover text-xl lg:text-base ">Contact</a>
          <a className="link link-hover text-xl lg:text-base ">Jobs</a>
          <a className="link link-hover text-xl lg:text-base ">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-3xl ">Legal</span>
          <a className="link link-hover text-xl lg:text-base ">Terms of use</a>
          <a className="link link-hover text-xl lg:text-base ">
            Privacy policy
          </a>
          <a className="link link-hover text-xl lg:text-base ">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
