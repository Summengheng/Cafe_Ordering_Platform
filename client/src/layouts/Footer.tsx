import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSnapchat,
  IconBrandTiktok,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sections flex flex-row px-3 py-4 justify-around bg-[#0C0C12]">
        <section className="w-[20%]">
          <h1 className="font-semibold text-3xl my-2 text-secondary">
            BrewCafe.
          </h1>
          <address className="">
            address: Sangkat Phsar Depo 2, Khan Toul Kork, Phnom Penh, Cambodia
          </address>
        </section>
        <section className="w-[25%] flex flex-col justify-center item-center">
          <h3 className="font-semibold mb-2">
            Get Exclusive Deals in your inbox
          </h3>
          <div className="subscribe mb-2">
            <input type="text" />
            <button>Subscribe</button>
          </div>
          <p className="my-2">
            we won't spam, read our <a href="">email policy</a>
          </p>
          <div className="social-link flex flex-row ">
            <a href="">
              <IconBrandFacebook />
            </a>
            <a href="">
              <IconBrandInstagram />
            </a>
            <a href="">
              <IconBrandTiktok />
            </a>
            <a href="">
              <IconBrandSnapchat />
            </a>
          </div>
        </section>
        <section className="w-[20%]">
          <h3 className="font-semibold">Legal Pages</h3>
          <div className="links flex flex-col ">
            <a className="legal-page-link">Terms and condition</a>
            <a className="legal-page-link">Privacy</a>
            <a className="legal-page-link">Cookies</a>
            <a className="legal-page-link">Modern Slavery Statement</a>
          </div>
        </section>
        <section className="w-[20%]">
          <h3 className="font-semibold">Important Links</h3>
          <div className="links flex flex-col pt-3">
            <a className="footer-important-link">Get help</a>
            <a className="footer-important-link">Add your restaurant</a>
            <a className="footer-important-link">Sign Up to deliver</a>
            <a className="footer-important-link">Create a business account</a>
          </div>
        </section>
      </div>
      <div className="bottom flex flex-row justify-between px-2 py-3">
        <p>BrewCafe Copyright 2026. All Rights Reserved.</p>
        <div className="links flex flex-row gap-x-2">
          <a className="footer-bottom-link">Privacy & Policy</a>
          <a className="footer-bottom-link">Terms</a>
          <a className="footer-bottom-link">Pricing</a>
          <a className="footer-bottom-link">
            Do not sell my personal information
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
