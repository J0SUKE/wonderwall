import Link from "next/link";
import React from "react";
import Arrow from "./Arrow";

export default function HoverButton({
  link,
  text,
  icon,
  buttonRef,
  style,
  arrowColor,
  arrowStyle,
  white,
}: {
  link: string;
  text: string;
  icon: "points" | "arrow";
  buttonRef?: React.MutableRefObject<HTMLButtonElement>;
  style?: string;
  arrowColor?: string;
  arrowStyle?: string;
  white?: boolean;
}) {
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <button
        className={`px-[1.7rem] py-[1.5rem] flex items-center relative ${
          white == true || white == undefined
            ? "hoverBtn"
            : "hoverBtn hoverBtn-w"
        } overflow-hidden ${style}`}
        ref={buttonRef}
      >
        <p
          className={`text-[.95rem] relative z-[2] transition-[color] ${
            white == true || white == undefined
              ? "text-[black]"
              : "text-[white]"
          } duration-300`}
        >
          {text}
        </p>
        {icon === "points" ? (
          <div className="ml-[3rem] relative z-[2]">
            <div className="w-[10px] h-[5px] flex justify-between">
              <span
                className={`h-[3.5px] w-[3.5px] rounded-[50%] ${
                  white == true || white == undefined
                    ? "bg-[black]"
                    : "bg-[white]"
                }  transition-[background] duration-300`}
              ></span>
              <span
                className={`h-[3.5px] w-[3.5px] rounded-[50%] ${
                  white == true || white == undefined
                    ? "bg-[black]"
                    : "bg-[white]"
                }  transition-[background] duration-300`}
              ></span>
            </div>
            <div className="w-[10px] h-[5px] flex justify-between mt-[2px]">
              <span
                className={`h-[3.5px] w-[3.5px] rounded-[50%] ${
                  white == true || white == undefined
                    ? "bg-[black]"
                    : "bg-[white]"
                }  transition-[background] duration-300`}
              ></span>
              <span
                className={`h-[3.5px] w-[3.5px] rounded-[50%] ${
                  white == true || white == undefined
                    ? "bg-[black]"
                    : "bg-[white]"
                }  transition-[background] duration-300`}
              ></span>
            </div>
          </div>
        ) : (
          <Arrow
            color={arrowColor == undefined ? "black" : arrowColor}
            style={arrowStyle == undefined ? "" : arrowStyle}
          />
        )}
        <div
          className={`absolute w-[150%] rounded-t-[50%] h-[200%] 
                ${
                  white == true || white == undefined
                    ? "bg-[#82969C]"
                    : "bg-[white]"
                } 
                left-[-25%] z-[1] hoverBtn__div`}
        ></div>
      </button>
    </a>
  );
}
