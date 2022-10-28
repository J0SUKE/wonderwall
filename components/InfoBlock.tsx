import Link from "next/link";
import React from "react";
import Arrow from "./Arrow";

export default function InfoBlock({
  text,
  link,
  style,
  infoBlockRef,
}: {
  text: string;
  link: string;
  style?: string;
  infoBlockRef?: React.MutableRefObject<HTMLDivElement>;
}) {
  return (
    <div className={`bg-[rgb(244,244,244)] ${style}`} ref={infoBlockRef}>
      <p className="text-[#202020] px-[1.5rem] pt-[1.5rem] text-[.9rem] italic pb-[2.5rem]">
        {text}
      </p>
      <Link href={link} passHref>
        <a className="flex items-center gap-[.8rem] py-[1.5rem] px-[1.5rem] border-t border-[lightgray] hoverArrow">
          <p>More</p>
          <Arrow
            color="black"
            style="rotate-[90deg] mt-[.15rem] transition-transform duration-500"
          />
        </a>
      </Link>
    </div>
  );
}
