import React from "react";
import classNames from "classnames";
type Props = {
  title?: string;
  onClick?: () => void;
  template?: "outline" | "green" | "black";
  className?: string;
};
const ButtonBase = ({ title, template, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        `rounded-xl py-3 px-8 border font-semibold
         ${
           template === "outline" &&
           " border border-[#6DE754] hover:bg-[#6DE754] hover:text-black"
         } 
        ${
          template === "green" &&
          "bg-[#6DE754] hover:bg-black hover:border-[#6DE754] hover:border text-black hover:text-white"
        }
         ${
           !template &&
           "bg-[#6DE754] hover:bg-black hover:border-[#6DE754] hover:border hover:text-white text-black"
         }
         ${
           template === "black" &&
           "bg-[#6DE754] hover:bg-black hover:border-[#6DE754] hover:border hover:text-white text-black border-[#161815]"
         }
          ${className}`
      )}
    >
      {title || "button"}
    </button>
  );
};

export default ButtonBase;
