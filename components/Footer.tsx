import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-[2] bg-[white]">
      <div data-speed="0.5" className="pt-[10vw]">
        <ul className="px-[5%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2vw]">
          <li>
            <h2>Subscribe to our newsletter</h2>
            <input
              type="text"
              placeholder="Your email address"
              className="border-b border-[black] w-[100%] pb-[.4rem] mt-[3rem] outline-none"
            />
            <button className="py-[.5rem] px-[1.6rem] border border-[darkgray] mt-[.7rem] hover:bg-[#82969C] hover:text-white hover:border-[transparent] transition-all duration-100">
              Sign up
            </button>
          </li>
          <li className="hidden sm:flex flex-col gap-[.7rem] items-start">
            <FooterLink link="/" text="Collection" />
            <FooterLink link="/" text="To partners" />
            <FooterLink link="/" text="Outlet" />
            <FooterLink link="/" text="About us" />
            <FooterLink link="/" text="Your account" />
            <FooterLink link="/" text="Cart" />
            <FooterLink link="/" text="Contact" />
          </li>
          <li className="lg:mt-[0] mt-[2rem] hidden sm:block">
            <p className="text-[darkgray]">To parteners</p>
            <ul className="flex flex-col gap-[.7rem] items-start mt-[1rem]">
              <FooterLink link="tel:48533711016" text="+48 533 711 016" />
              <FooterLink
                link="mailto:bp@wonderwall-studio.pl"
                text="bp@wonderwall-studio.pl"
              />
            </ul>
            <p className="text-[darkgray] mt-[2rem]">Customer service</p>
            <ul className="flex flex-col gap-[.7rem] items-start mt-[1rem]">
              <FooterLink link="tel:48577555864" text="+48 577 555 864" />
              <FooterLink link="tel:48533187489" text="+48 533 187 489" />
              <FooterLink
                link="mailto:info@wonderwall-studio.pl"
                text="info@wonderwall-studio.pl"
              />
            </ul>
          </li>
          <li className="flex flex-col gap-[.7rem] items-start lg:mt-[0] mt-[2rem]">
            <FooterLink text="Catalogs: 2022, 2021, 2020, 2019" link="/ " />
            <FooterLink text="Catalog Wonderwall Ceramic" link="/" />
            <FooterLink text="Sticking instruction" link="/" />
            <FooterLink text="Free samples" link="/" />
            <FooterLink text="Privacy Policy" link="/" />
            <FooterLink text="Terms & Conditions" link="/" />
            <FooterLink text="Advanced customization" link="/" />
            <FooterLink text="Promo Canvas" link="/" />
          </li>
        </ul>
        <ul className="px-[5%] grid grid-cols-3 gap-[2rem] mt-[3rem]">
          <div className="hidden sm:flex items-start gap-[1.4rem]">
            <ExternalLink
              text="Facebook"
              link="https://www.facebook.com/WonderWallStudio"
            />
            <ExternalLink
              text="Instagram"
              link="https://www.facebook.com/WonderWallStudio"
            />
          </div>
          <p className="hidden sm:block text-center text-[darkgray] text-[.95rem]">
            Copyright © 2016-2019 Idealab Sp. z o. o.{" "}
          </p>

          <div className="  flex flex-col items-start sm:items-end gap-[.7rem]">
            <p className="text-[darkgray] text-[.95rem]">
              Designed by{" "}
              <ExternalLink text="Obys" link="https://obys.agency/" />
            </p>
            <p className="text-[darkgray] text-[.95rem]">
              Code by{" "}
              <ExternalLink text="Jean" link="https://jeanmazouni.com/" />
            </p>
          </div>
        </ul>
      </div>
    </footer>
  );
}

function ExternalLink({ link, text }: { link: string; text: string }) {
  return (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className="text-[darkgray] text-[.95rem] inline-block relative pb-[.1rem] before:content-[''] before:absolute before:bottom-0 before:w-[100%] before:h-[1px] before:bg-[darkgray] before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-[1] hover:before:origin-left"
    >
      {text}
    </a>
  );
}

function FooterLink({ link, text }: { link: string; text: string }) {
  return (
    <Link href={link} passHref>
      <a className="hoverLink hoverLink-b inline-block  text-[.95rem]">
        {text}
      </a>
    </Link>
  );
}
