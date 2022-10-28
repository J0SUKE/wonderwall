import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function PageLoader() {
  const pageLoaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageLoaderRef) return;

    window.addEventListener("load", () => {
      gsap.fromTo(
        pageLoaderRef.current,
        {
          height: "100vh",
        },
        {
          height: "0vh",
          duration: 1,
        }
      );
    });
  });

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 z-[99999999999999] bg-white overflow-hidden"
      ref={pageLoaderRef}
    >
      <h1 className="absolute animate-show top-[50vh] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[clamp(3rem,8vmax,8vw)] uppercase noto">
        wonderwall
      </h1>
    </div>
  );
}
