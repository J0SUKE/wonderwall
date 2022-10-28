import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import HoverMenu from "./HoverMenu";

export default function FirstSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const Heading2Ref = useRef<HTMLDivElement>(null);
  const ParagRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(
    null
  ) as React.MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      {
        scaleY: 1,
      },
      {
        scaleY: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top " + window.innerHeight * 0.8,
        },
      }
    );

    gsap.fromTo(
      [Heading2Ref.current, ParagRef.current],
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        scrollTrigger: {
          trigger: Heading2Ref.current,
          start: "bottom bottom",
        },
        opacity: 1,
        yPercent: 0,
        duration: 1,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "center bottom",
        },
        opacity: 1,
        yPercent: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="flex justify-between px-[2%] lg:px-[5%] mt-[6rem] pb-[6rem]">
      <HoverMenu />
      <div className="hidden md:block w-[30%]">
        <div className="h-[175px]">
          <div className="relative w-[140px] h-[175px]">
            <Image alt="" src={"/images/tiff.jpg"} layout={"fill"} />
            <div
              className="absolute w-[100%] h-[110%] bg-[white] origin-bottom"
              ref={imageRef}
            ></div>
          </div>
        </div>
        <h2
          className="text-[1.6rem] leading-[2rem] mt-[1.4rem]"
          ref={Heading2Ref}
        >
          Welcome to the amazing world of WonderWall Studio wallpapers!
        </h2>

        <p className="mt-[1.5rem] text-[#202020]" ref={ParagRef}>
          WonderWall Studio wallpapers are characterized by an amazing harmony
          of the artist’s vision, love of art, and modern technology. All these
          things combined create a lasting, tangible value. Our designs not only
          perfectly complement any interior, but also create images on the wall
          with an extraordinary power of emotional expression.
        </p>
        <DownloadCatalogButton
          link="https://wonderwall-studio.pl/wp-content/uploads/2021/09/Katalog_Wonderwall_2021.pdf"
          text="Download catalog 2021"
          buttonRef={buttonRef}
        />
      </div>
      <div className="block md:hidden w-[100%]">
        <ul className="w-[100%]">
          <Item
            link="https://wonderwall-studio.pl/kategoria-produktu/wallpapers/?lang=en"
            text="wallpapers"
            image={"/images/home_tapety.jpg"}
          />
          <Item
            link="https://wonderwall-studio.pl/kategoria-produktu/paint/?lang=en"
            text="paints"
            image={"/images/home_farby.jpg"}
          />
          <Item
            link="https://wonderwall-studio.pl/kategoria-produktu/glue-varnish/?lang=en"
            text="Glue / Resin"
            image={"/images/home_zywice.jpg"}
          />
          <Item
            link="https://wonderwall-studio.pl/kategoria-produktu/outlet/?lang=en"
            text="Outlet"
            image={"/images/outlet_small.jpg"}
          />
        </ul>
      </div>
    </div>
  );
}

function Item({
  link,
  image,
  text,
}: {
  link: string;
  image: string;
  text: string;
}) {
  return (
    <li className="pb-[4rem]">
      <a
        className="block w-[100%]"
        href={link}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div className="w-[100%] h-[100vh] relative">
          <Image
            alt=""
            src={image}
            layout={"fill"}
            objectFit={"cover"}
            priority={true}
          />
        </div>
        <h2 className="text-[1.5rem] mt-[1rem]">{text}</h2>
      </a>
    </li>
  );
}

function DownloadCatalogButton({
  link,
  text,
  buttonRef,
}: {
  link: string;
  text: string;
  buttonRef?: React.MutableRefObject<HTMLButtonElement>;
}) {
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <button
        className="bg-[#f4f4f4] px-[1.7rem] py-[1.5rem] flex items-center relative hoverBtn overflow-hidden mt-[2rem]"
        ref={buttonRef}
      >
        <DownloadLogo />
        <p className="ml-[1rem] text-[.95rem] text-[#202020] relative z-[2] transition-[color] duration-300">
          {text}
        </p>
        <div className="absolute w-[150%] rounded-t-[50%] h-[200%] bg-[#82969C] left-[-25%] z-[1] hoverBtn__div"></div>
      </button>
    </a>
  );
}

function DownloadLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="relative z-[2] w-[1rem] rotate-180"
    >
      <path
        fill="#202020"
        className="transition-[fill] duration-300"
        d="M12.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4a1,1,0,1,0,1.42,1.42L11,9.41V21a1,1,0,0,0,2,0V9.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM19,2H5A1,1,0,0,0,5,4H19a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
}
