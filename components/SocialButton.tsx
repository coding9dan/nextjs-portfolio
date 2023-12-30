import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColor?: string | undefined;
}

const SocialButton: React.FC<Props> = ({ children, bgColor = "black" }) => {
  let bgHoverColor;

  switch (bgColor) {
    case "linkedin":
      bgHoverColor = "hover:bg-linkedin";
      break;
    default:
      bgHoverColor = "hover:bg-black";
      break;
  }

  return (
    <button
      className={`group h-12 w-12 bg-white ${bgHoverColor} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
