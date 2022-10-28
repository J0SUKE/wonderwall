import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Hero from "../pageComponents/Home/Hero";
import FirstSection from "../pageComponents/Home/FirstSection";
import SecondSection from "../pageComponents/Home/SecondSection";
import ThirdSection from "../pageComponents/Home/ThirdSection";
import FourthSection from "../pageComponents/Home/FourthSection";
import BottomSlider from "../pageComponents/Home/BottomSlider";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import { log } from "console";

export const colorcontext = React.createContext<{ white: boolean } | null>(
  null
);

export default function Home() {
  const BlueZone = useRef<HTMLDivElement>(null);
  const MaroonZone = useRef<HTMLDivElement>(null);
  const Content = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [white, setWhite] = useState(true);

  // content color changing on scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      Content.current,
      {
        background: "#82969C",
      },
      {
        background: "#AFA8A1",
        scrollTrigger: {
          trigger: MaroonZone.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      Content.current,
      {
        background: "white",
      },
      {
        background: "#82969C",
        scrollTrigger: {
          trigger: BlueZone.current,
          start: "top center",
          toggleActions: "play none none reverse",
          onEnter: () => {
            setWhite(false);
          },
          onLeaveBack: () => {
            setWhite(true);
          },
        },
      }
    );
  }, []);

  return (
    <colorcontext.Provider value={{ white }}>
      <Hero />
      <div className="relative z-[2] bg-[white]" ref={Content}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <div ref={BlueZone}>
          <BottomSlider BlueZone={BlueZone} />
        </div>
        <div ref={MaroonZone}>
          <div className="h-[30vh] px-[5%] mt-[4rem]">
            <p className="text-[white] mb-[1rem]">@wonderwall_mural</p>
            <a
              href="https://www.instagram.com/wonderwall_mural/"
              target={"_blank"}
              rel="noreferrer"
              className="block w-[100%] h-[15vw] relative"
            >
              <Image
                src={"/images/instagram.svg"}
                layout={"fill"}
                alt={""}
                priority={true}
              />
            </a>
          </div>
          <div className="mt-[3rem] sm:mt-[12rem] px-[5%]">
            <p className="text-[.9rem] text-[#e1e1e19c]">Take a shortcut</p>
            <div className="pb-[20vh] mt-[3rem] flex flex-col sm:flex-row items-start sm:items-center gap-[.7rem]">
              <ImageHoverLink
                text="About us"
                link="https://wonderwall-studio.pl/o-nas/?lang=en"
                image="/images/m.jpg"
              />
              <span className="hidden sm:block mt-[.6rem] h-[.2rem] w-[2rem] bg-[white]"></span>
              <ImageHoverLink
                text="Wallpapers"
                link="https://wonderwall-studio.pl/kategoria-produktu/wallpapers/?lang=en"
                image="/images/Bez-nazwy-3.jpg"
              />
              <span className="hidden sm:block mt-[.6rem] h-[.2rem] w-[2rem] bg-[white]"></span>
              <ImageHoverLink
                text="Free samples"
                link="https://wonderwall-studio.pl/samples/?lang=en"
                image="/images/pr.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </colorcontext.Provider>
  );
}

function ImageHoverLink({
  image,
  link,
  text,
}: {
  image: string;
  link: string;
  text: string;
}) {
  const hoverImg = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let mouseposition = {
      x: 0,
      y: 0,
    };

    window.addEventListener("mousemove", (e) => {
      if (!itemRef.current || !hoverImg.current) return;

      mouseposition.x =
        e.clientX -
        itemRef.current.offsetLeft -
        hoverImg.current.getBoundingClientRect().width / 2;
    });

    itemRef.current?.addEventListener("mousemove", (e) => {
      if (!hoverImg.current) return;

      mouseposition.y =
        e.offsetY + hoverImg.current.getBoundingClientRect().height / 4;
    });

    function followsMosue() {
      gsap.to(hoverImg.current, {
        x: mouseposition.x,
        y: mouseposition.y,
      });

      requestAnimationFrame(followsMosue);
    }

    followsMosue();
  }, []);

  return (
    <a
      className="relative text-[white] text-[clamp(1.8rem,4vw,2.6rem)] hoverItem-b"
      ref={itemRef}
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <p className="relative z-[2] transition-opacity duration-300">{text}</p>
      <div
        className="hidden sm:block absolute bottom-0 w-[12rem] transition-[height] duration-500 h-[0] overflow-hidden pointer-events-none hover-img-b"
        ref={hoverImg}
      >
        <div className="relative w-[100%] h-[15rem] pointer-events-none">
          <Image src={image} layout={"fill"} alt="" />
        </div>
      </div>
    </a>
  );
}
