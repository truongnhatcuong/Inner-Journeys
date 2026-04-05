import Image from "next/image";
import React from "react";

const SacredValentine: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start py-99 px-6">
      {/* Background image */}
      <Image
        alt="bannerhome"
        src="/images/banner12.png"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Content */}
      <div className="absolute top-5 z-10 flex flex-col items-center text-center max-w-sm w-full ">
        {/* Title */}
        <h1
          className="text-[52px] sm:text-[64px] leading-none mb-3 font-black"
          style={{ fontFamily: "'Blackstone', cursive", color: "#6b3fa0" }}
        >
          Sacred Valentine
        </h1>

        {/* Subtitle */}
        <p
          className="text-[15px] sm:text-[16px] leading-[1.8] mb-6 font-semibold"
          style={{ fontFamily: "'DM Sans', sans-serif", color: "#a359a0" }}
        >
          A journey of deep connection,
          <br />
          expression &amp; sharing
          <br />
          ...for singles and couples...
        </p>
      </div>
    </div>
  );
};

export default SacredValentine;
