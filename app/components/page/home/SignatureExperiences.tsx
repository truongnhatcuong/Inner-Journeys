import Image from "next/image";
import React from "react";

const experiences = [
  {
    img: "/images/banner3.png",
    title: "SACRED UNION",
    for: "Established couples",
    duration: "2,5 hours",
    format: "Group Experience",
    desc: "A curated immersion for established couples blending trust rituals and embodied communication to rekindle intimacy, emotional safety, and conscious connection.",
  },
  {
    img: "/images/banner4.png",
    title: "HONEYMOON FOREVER",
    for: "Newlyweds, recent couples",
    duration: "2,5 hours",
    format: "Group Experience",
    desc: "A refined container for newlyweds or recent couples to build a foundation of devotion, sensual presence, and lasting love through structured relational practice.",
  },
  {
    img: "/images/banner5.png",
    title: "HIGHER LOVE",
    for: "Singles",
    duration: "2,5 hours",
    format: "Group Experience",
    desc: "A supportive singles immersion designed to cultivate self-connection, relational clarity, and magnetic presence that open the path to conscious partnership.",
  },
];

const SignatureExperiences: React.FC = () => {
  return (
    <div
      className="relative w-full overflow-hidden px-6  sm:px-12 md:px-20 py-10 md:py-14"
      style={{ background: "#c4a882" }}
    >
      {/* Mandala watermark top-right */}
      <div className="absolute -top-10 right-0 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {[0, 30, 60, 90, 120, 150].map((r) => (
            <g key={r} transform={`rotate(${r} 100 100)`}>
              <ellipse
                cx="100"
                cy="55"
                rx="7"
                ry="20"
                fill="none"
                stroke="#fff"
                strokeWidth="0.8"
              />
              <ellipse
                cx="100"
                cy="145"
                rx="7"
                ry="20"
                fill="none"
                stroke="#fff"
                strokeWidth="0.8"
              />
              <ellipse
                cx="55"
                cy="100"
                rx="20"
                ry="7"
                fill="none"
                stroke="#fff"
                strokeWidth="0.8"
              />
              <ellipse
                cx="145"
                cy="100"
                rx="20"
                ry="7"
                fill="none"
                stroke="#fff"
                strokeWidth="0.8"
              />
            </g>
          ))}
          {[0, 45, 90, 135].map((r) => (
            <g key={r} transform={`rotate(${r} 100 100)`}>
              <ellipse
                cx="100"
                cy="68"
                rx="4"
                ry="16"
                fill="none"
                stroke="#fff"
                strokeWidth="0.5"
              />
              <ellipse
                cx="100"
                cy="132"
                rx="4"
                ry="16"
                fill="none"
                stroke="#fff"
                strokeWidth="0.5"
              />
            </g>
          ))}
          <circle
            cx="100"
            cy="100"
            r="28"
            fill="none"
            stroke="#fff"
            strokeWidth="0.8"
          />
          <circle
            cx="100"
            cy="100"
            r="48"
            fill="none"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="68"
            fill="none"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="#fff"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      {/* Mandala watermark bottom-right */}
      <div className="absolute -bottom-16 right-4 w-[180px] h-[180px] md:w-[300px] md:h-[300px] opacity-15 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {[0, 30, 60, 90, 120, 150].map((r) => (
            <g key={r} transform={`rotate(${r} 100 100)`}>
              <ellipse
                cx="100"
                cy="55"
                rx="7"
                ry="20"
                fill="none"
                stroke="#fff"
                strokeWidth="0.8"
              />
              <ellipse
                cx="100"
                cy="145"
                rx="7"
                ry="20"
                fill="none"
                stroke="#fff"
                strokeWidth="0.8"
              />
            </g>
          ))}
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="#fff"
            strokeWidth="0.7"
          />
          <circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke="#fff"
            strokeWidth="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="#fff"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="relative z-10 mb-2">
        <div
          className="-rotate-3 inline-block text-[56px] sm:text-7xl md:text-9xl leading-[0.8]"
          style={{ fontFamily: "'Blackstone', cursive" }}
        >
          Signature
        </div>
        <div
          className="pl-4 sm:pl-8 md:pl-11 text-[28px] sm:text-[38px] md:text-[54px]  uppercase tracking-[3px] md:tracking-[4px] leading-[0.8]"
          style={{ fontFamily: "'HiguenElage'" }}
        >
          EXPERIENCES
        </div>
      </div>

      {/* Divider */}
      <div className="ml-4 sm:ml-8 md:ml-12 relative z-10 w-48 sm:w-64 md:w-90 bg-white h-[1.5px] mb-8 md:mb-10" />

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-13">
        {experiences.map((exp) => (
          <div key={exp.title} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-55 overflow-hidden mb-5">
              <Image
                src={exp.img}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className="flex-1 flex flex-col text-[14px] sm:text-[15px] leading-[1.7] mb-5">
              <p className="font-bold text-[15px] sm:text-[16px] tracking-wide mb-2">
                {exp.title}
              </p>
              <p>
                <span className="font-bold">For:</span> {exp.for}
              </p>
              <p>
                <span className="font-bold">Duration:</span> {exp.duration}
              </p>
              <p className="mb-3">
                <span className="font-bold">Format:</span> {exp.format}
              </p>
              <p className="leading-relaxed">{exp.desc}</p>
            </div>

            {/* Read More Button */}
            <button
              className="text-white py-3 px-5 text-xs tracking-[2px] uppercase bg-black w-full sm:w-fit transition-colors duration-300 hover:bg-neutral-800"
              style={{ fontFamily: "'LeagueSpartan'" }}
            >
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignatureExperiences;
