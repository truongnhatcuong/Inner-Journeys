import Image from "next/image";
import React from "react";

const Banner7: React.FC = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src="/images/banner7.png"
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
};

export default Banner7;
