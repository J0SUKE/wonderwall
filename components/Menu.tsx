import React from "react";
import Link from "next/link";
import HoverButton from "./HoverButton";

export default function Menu({
  menuRef,
  CloseMenu,
}: {
  menuRef: React.MutableRefObject<HTMLDivElement>;
  CloseMenu: () => void;
}) {
  return (
    <>
      <div
        className="fixed flex gap-[5%] h-[100vh] w-[100%] z-[98] bg-[#82969C] translate-x-[100%]"
        ref={menuRef}
      >
        <div className="hidden lg:flex w-[13%] justify-center items-center">
          <button
            className='border relative border-[#ffffff3d] overflow-hidden rounded-[50%] h-[7rem] w-[7rem] flex justify-center items-center close-btn before:content-[""] before:absolute before:h-[150%] before:w-[150%] before:bg-[white] before:transition-transform before:duration-700 before:scale-0 hover:before:scale-100 before:rounded-[50%] hover:before:origin-bottom before:origin-top hoverBtn-w'
            onClick={CloseMenu}
          >
            <CloseSVG />
          </button>
        </div>
        <div className="pl-[2vw] lg:pl-[0] pt-[30vmax] lg:pt-[10vmax] pb-[2vmax] flex flex-col justify-between items-start opacity-0 translate-y-[-10]">
          <div>
            <p className="text-[#cecece]">Catalog</p>
            <ul>
              <li>
                <Link href={"/catalog/wallpapers"}>
                  <a className="hoverLink text-[white] text-[2.5rem]">
                    Wallpapers
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/catalog/paints"}>
                  <a className="hoverLink text-[white] text-[2.5rem]">Paints</a>
                </Link>
              </li>
              <li>
                <Link href={"/catalog/glue-resin"}>
                  <a className="hoverLink text-[white] text-[2.5rem]">
                    Glue / Resin
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/catalog/outlet"}>
                  <a className="hoverLink text-[white] text-[2.5rem]">Outlet</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-[1rem] [&>ul>li]:mt-[.5rem] text-[.9rem]">
            <ul>
              <li>
                <Link href="/about" passHref>
                  <a className="hoverLink text-[white]">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/parteners" passHref>
                  <a className="hoverLink text-[white]">To partners</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="hoverLink text-[white]">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/canvas" passHref>
                  <a className="hoverLink text-[white]">Promo Canvas</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Sticking instruction</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Advanced customization</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Free samples</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Płatne próbki</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Catalog 2022</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Catalog 2021</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Catalog 2020</a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a className="hoverLink text-white">Catalog 2019</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-[1rem]">
            <a
              href="https://www.facebook.com/WonderWallStudio"
              target={"_blank"}
              rel="noreferrer"
              className="hoverLink text-[white]"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/wonderwall_mural/"
              target={"_blank"}
              rel="noreferrer"
              className="hoverLink text-[white]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="fixed hidden lg:block right-0 z-[100] w-[35vw] h-[100vh] translate-x-[100%]">
        <div className="absolute top-0 left-0 right-0 bg-[#F4F4F4] h-[50vh] overflow-hidden">
          <div className="w-[100%] h-[50vh] px-[20%] py-[12%] flex flex-col justify-between">
            <h2 className="text-[1.5rem]">Your account</h2>
            <p className="text-[.95rem] opacity-[.7]">
              We manufacture wallpaper ourselves and therefore guarantee the
              highest quality of our products.
            </p>
            <div className="flex items-center gap-[2.5rem]">
              <HoverButton
                link="/register"
                text="Register"
                icon="arrow"
                style="border border-[#cdcdcd] transition-[border] duration-300 hover:border-[transparent] bthBlackArrow"
                arrowStyle="rotate-[90deg] ml-[1rem]"
              />
              <Link href={"/login"}>
                <a className="opacity-[0.4] hover:opacity-[1] transition-opacity duration-300">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-[50vh] left-0 right-0 bg-[white] h-[50vh] overflow-hidden">
          <div className="w-[100%] h-[50vh] px-[20%] py-[12%] flex flex-col justify-between">
            <h2 className="text-[1.5rem]">Constructor</h2>
            <p className="text-[.95rem] opacity-[.7]">
              We have created a tool that allows you to make individual changes
              and adapt designs to your own needs.
            </p>
            <div className="flex items-center gap-[2.5rem]">
              <HoverButton
                link="/catalog/wallpapers"
                text="Go to catalog"
                icon="points"
                style="border border-[#cdcdcd] transition-[border] duration-300 hover:border-[transparent] bthBlackArrow"
                arrowStyle="rotate-[90deg] ml-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CloseSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-[2] w-[1.8rem] h-[1.8rem]"
      viewBox="0 0 24 24"
    >
      <path
        className="block transition-[fill] duration-500"
        fill="#FFFFFF"
        d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
      />
    </svg>
  );
}
