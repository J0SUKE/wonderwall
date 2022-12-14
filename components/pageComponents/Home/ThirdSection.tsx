import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import React, { useRef } from "react";
import Arrow from "../../Arrow";
import HoverButton from "../../HoverButton";
import InfoBlock from "../../InfoBlock";

export default function ThirdSection() {
  const video = useRef<HTMLVideoElement>(null);
  const videoContainer = useRef<HTMLDivElement>(null);

  function PlayVideo() {
    if (video.current?.paused) {
      video.current.play();
      gsap.fromTo(
        videoContainer.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
    } else {
      video.current?.pause();
      gsap.fromTo(
        videoContainer.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      );
    }
  }

  return (
    <div className="mt-[5rem] block md:flex pb-[5rem]">
      <div className="block md:hidden pl-[3%] pb-[3rem]">
        <h2 className="text-[2.6rem]">Constructor</h2>
        <p className="my-[1.5rem] w-[80%] text-[.9rem] text-[#202020]">
          Watch the movie and see how easy it is to adjust wallpaper for your
          individual needs!!
        </p>
        <HoverButton
          link="/catalog"
          text="Collection"
          icon="points"
          style="border border-[#cdcdcd] transition-[border] duration-300 hover:border-[transparent]"
        />
      </div>

      <div className="relative w-[100%] md:w-[64%] h-[50vh] md:h-[90vh] bg-[#f4f1ee] overflow-hidden">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 w-[110%] h-[100%]"
          data-speed="0.9"
        >
          <Image
            alt=""
            src={"/images/third.jpeg"}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            priority={true}
          />
        </div>
        <button className="absolute h-[90px] w-[90px] bg-[white] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] flex justify-center items-center">
          <PlayLogo />
        </button>

        <div
          ref={videoContainer}
          className="absolute h-[100%] w-[100%] top-0 left-0 bottom-0 right-0 cursor-pointer bg-[white] opacity-[0]"
        >
          <video
            ref={video}
            className="w-[100%] h-[100%]"
            src="/images/constructor.mp4"
            playsInline
            data-speed="0.9"
            onClick={PlayVideo}
          ></video>
        </div>
      </div>
      <div className="h-[90vh] hidden md:flex flex-col justify-between w-[28%] ml-[2rem]">
        <div>
          <h2 className="text-[2.6rem]">Constructor</h2>
          <p className="my-[1.5rem] text-[.9rem] text-[#202020]">
            Watch the movie and see how easy it is to adjust wallpaper for your
            individual needs!!
          </p>
          <HoverButton
            link="https://wonderwall-studio.pl/kategoria-produktu/wallpapers/?lang=en"
            text="Collection"
            icon="points"
            style="border border-[#cdcdcd] transition-[border] duration-300 hover:border-[transparent]"
          />
        </div>
        <InfoBlock
          text="Wallpaper customized in terms of size or in any other way are not refundable."
          link="https://wonderwall-studio.pl/polityka-prywantosci/?lang=en"
        />
      </div>
      <div className="block md:hidden px-[3%]">
        <InfoBlock
          text="Wallpaper customized in terms of size or in any other way are not refundable."
          link="/catalog/wallpapers"
          style="mt-[3rem]"
        />
      </div>
    </div>
  );
}

function PlayLogo() {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
        fill="#82969C"
      ></path>
    </svg>
  );
}
