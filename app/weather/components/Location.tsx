import Image from "next/image";
import React from "react";

interface Props {
  cityName: string;
  weatherIcon: string;
  altText: string;
}

const Location: React.FC<Props> = ({ cityName, weatherIcon, altText }) => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl font-semibold">{cityName}</h1>
      <div>
        {cityName && (
          <Image src={weatherIcon} alt={altText} width={100} height={100} />
        )}
      </div>
    </div>
  );
};

export default Location;
