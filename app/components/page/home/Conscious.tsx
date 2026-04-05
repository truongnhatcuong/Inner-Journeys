import Image from "next/image";
import React from "react";

// Thêm vào globals.css hoặc _document.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@300;400;600&display=swap" rel="stylesheet" />
// Và trong tailwind.config.ts:
// fontFamily: { cursive: ["'Great Vibes'", "cursive"], garamond: ["'Cormorant Garamond'", "serif"] }

const Conscious: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-between px-16 py-12
      
       gap-12"
      style={{
        background:
          "linear-gradient(135deg, #e8e0db 0%, #ede6e0 40%, #e4ddd8 100%)",
      }}
    >
      {/* Mandala watermark */}
      <div className="absolute top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.07] pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {[0, 30, 60, 90, 120, 150].map((r) => (
            <g key={r} transform={`rotate(${r} 100 100)`}>
              <ellipse
                cx="100"
                cy="60"
                rx="8"
                ry="22"
                fill="none"
                stroke="#6b4c3b"
                strokeWidth="0.8"
              />
              <ellipse
                cx="100"
                cy="140"
                rx="8"
                ry="22"
                fill="none"
                stroke="#6b4c3b"
                strokeWidth="0.8"
              />
              <ellipse
                cx="60"
                cy="100"
                rx="22"
                ry="8"
                fill="none"
                stroke="#6b4c3b"
                strokeWidth="0.8"
              />
              <ellipse
                cx="140"
                cy="100"
                rx="22"
                ry="8"
                fill="none"
                stroke="#6b4c3b"
                strokeWidth="0.8"
              />
            </g>
          ))}
          {[0, 45, 90, 135].map((r) => (
            <g key={r} transform={`rotate(${r} 100 100)`}>
              <ellipse
                cx="100"
                cy="70"
                rx="5"
                ry="18"
                fill="none"
                stroke="#6b4c3b"
                strokeWidth="0.5"
              />
              <ellipse
                cx="100"
                cy="130"
                rx="5"
                ry="18"
                fill="none"
                stroke="#6b4c3b"
                strokeWidth="0.5"
              />
            </g>
          ))}
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="#6b4c3b"
            strokeWidth="0.8"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="#6b4c3b"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="#6b4c3b"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#6b4c3b"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      {/* Left: Text Column */}
      <div className="relative z-10 lg:w-1/2 flex flex-col justify-center">
        {/* Cursive heading */}
        <h2
          className="font-cursive text-[100px] tracking-[6px] font-serif   origin-left inline-block -skew-3 leading-10"
          style={{
            fontFamily: "'Blackstone', cursive",
          }}
        >
          Conscious
        </h2>

        {/* Bold COUPLES */}
        <h1
          className="pl-7 text-[56px] font-normal uppercase leading-none mb-5 tracking-[10px]"
          style={{
            fontFamily: "'HiguenElage'",
          }}
        >
          COUPLES
        </h1>

        {/* Divider */}
        <div className="ml-7 relative z-10 w-90 bg-white h-[1.5px] mb-10" />

        {/* Body text */}
        <div className="max-w-md leading-[1.8] text-[15px] space-y-4">
          <p>
            <strong className="font-bold" style={{ color: "#1a1008" }}>
              Sacred Union
            </strong>{" "}
            offers refined, heart-centered relational immersion for conscious
            couples and those wishing to enter relationship. Our signature
            experiences foster depth, trust and embodied connection.
          </p>
          <p>
            Through guided partner experiences, structured relational processes
            and integration rituals participants rediscover themselves and each
            other with intention.
          </p>
          <p>
            This is experiential heart intimacy for modern, discerning guests.
            Professionally delivered.
          </p>
        </div>
      </div>

      {/* Right: Images Column */}
      <div className="relative z-10 lg:w-1/2 flex items-end justify-end gap-4">
        {/* Small image - hands */}
        <div className="relative w-40 h-[220px] overflow-hidden rounded-sm flex-shrink-0 self-end">
          <Image
            alt="Hands holding"
            src="/images/banner2.jpeg"
            fill
            className="object-cover"
          />
        </div>

        {/* Large image - couple on beach */}
        <div className="relative w-[300px] h-[460px] overflow-hidden rounded-sm flex-shrink-0">
          <Image
            alt="Couple on beach"
            src="/images/banner1.jpg"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Conscious;
