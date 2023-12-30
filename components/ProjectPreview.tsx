import React from "react";
import Arrow from "../public/arrow.svg";
import Link from "next/link";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  link?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "Block name",
  description = "This is a great project",
  imageUrl = "/project-1.png",
  bgColor = "#e4e4e7",
  link = "",
  dark = false,
}) => {
  return (
    <div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}
    >
      <div
        className="h-full w-full px-10 py-6 duration-[500ms] transition-all hover:scale-105 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
            <Link href={link}>
              <Arrow className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
