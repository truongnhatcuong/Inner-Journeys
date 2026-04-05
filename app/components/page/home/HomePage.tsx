import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <Image
        alt="bannerhome"
        src="/images/bannerhome.jpeg"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay nhẹ cho dễ đọc chữ */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {/* Sacred */}
        <h1
          className="
            text-[80px] sm:text-[120px] md:text-[160px] lg:text-[198px]
            leading-none tracking-[8px] sm:tracking-[14px] md:tracking-[20px]
            -rotate-[10deg] sm:-rotate-[12deg]
            self-start ml-[8%] sm:ml-[15%] md:ml-[20%]
            mt-0
          "
          style={{
            fontFamily: "'Blackstone', cursive",
            display: "inline-block",
            transform: "rotate(-10deg) skewX(-10deg)",
          }}
        >
          Sacred
        </h1>

        {/* UNION */}
        <p
          className="
            text-[70px] sm:text-[100px] md:text-[140px] lg:text-[160px]
            leading-none -mt-4 sm:-mt-6
            self-center
          "
          style={{ fontFamily: "'HiguenElage', serif" }}
        >
          UNION
        </p>

        {/* THE ART OF RELATIVE */}
        <p
          className="
            text-[11px] sm:text-[16px] md:text-[20px] lg:text-[24px]
            tracking-[3px] sm:tracking-[4px]
            font-black uppercase
            mt-3 sm:mt-4
            text-center px-4
          "
          style={{ fontFamily: "'LeagueSpartan', sans-serif" }}
        >
          THE ART OF RELATIVE
        </p>

        {/* BOOK INTRO CALL */}
        <div
          className="
            mt-5 sm:mt-7
            underline uppercase tracking-[2px]
            bg-black/70 hover:bg-black transition-colors
            px-5 py-3 sm:px-6 sm:py-4
            text-[10px] sm:text-[12px]
            cursor-pointer
          "
          style={{ fontFamily: "'LeagueSpartan', sans-serif" }}
        >
          book intro call
        </div>
      </div>
    </div>
  );
};

export default HomePage;
