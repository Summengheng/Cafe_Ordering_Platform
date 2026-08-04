import React from "react";
import { Link } from "react-router";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSnapchat,
  IconBrandTiktok,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sections grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-40 pb-10 pt-8 px-6 md:px-10 bg-[#0C0C12]">
        <section>
          <h1 className="font-semibold text-3xl my-2 text-[#b08ee0]">
            BrewCafe.
          </h1>
          <address className="">
            address: Sangkat Phsar Depo 2, Khan Toul Kork, Phnom Penh, Cambodia
          </address>
        </section>

        <section className="flex flex-col justify-center gap-y-2">
          <h3 className="font-semibold mb-2 text-[#b08ee0]">
            Get Exclusive Deals in your inbox
          </h3>
          <div className="subscribe mb-2 flex flex-col md:flex-row gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com"
              autoComplete="off"
              className="px-3 py-2 border-none outline-none bg-gray-900/70 rounded-xl text-l w-full md:w-auto flex-1"
            />
            <button className="px-3 py-2 rounded-full bg-secondary text-background font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="my-2">
            we won't spam, read our <Link to="#">email policy</Link>
          </p>
          <div className="social-link flex flex-row gap-x-3">
            <Link to="https://www.instagram.com/s.hengg_/">
              <IconBrandFacebook stroke={1} className="hover:text-blue-700" />
            </Link>
            <Link to="#">
              <IconBrandInstagram stroke={1} className="hover:text-blue-700" />
            </Link>
            <Link to="#">
              <IconBrandTiktok stroke={1} className="hover:text-blue-700" />
            </Link>
            <Link to="#">
              <IconBrandSnapchat stroke={1} className="hover:text-blue-700" />
            </Link>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-[#b08ee0]">Legal Pages</h3>
          <div className="links flex flex-col gap-y-2 mt-2">
            <a className="legal-page-link">Terms and condition</a>
            <a className="legal-page-link">Privacy</a>
            <a className="legal-page-link">Cookies</a>
            <a className="legal-page-link">Modern Slavery Statement</a>
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-[#b08ee0]">Important Links</h3>
          <div className="links flex flex-col pt-3 gap-y-2">
            <a className="footer-important-link">Get help</a>
            <a className="footer-important-link">Add your restaurant</a>
            <a className="footer-important-link">Sign Up to deliver</a>
            <a className="footer-important-link">Create a business account</a>
          </div>
        </section>
      </div>

      <div className="bottom flex flex-col md:flex-row items-center justify-between gap-y-3 px-4 py-4 bg-gray-900/70 text-center md:text-left">
        <p>BrewCafe Copyright 2026. All Rights Reserved.</p>
        <div className="links flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
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
