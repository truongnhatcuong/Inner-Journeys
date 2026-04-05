import Image from "next/image";
import React from "react";

/**
 * FONTS cần thêm vào _document.tsx / layout.tsx:
 *
 * Blackstone & Higuen Elage là commercial fonts — cần mua license và self-host.
 * Sau khi có file font, thêm vào globals.css:
 *
 * @font-face {
 *   font-family: 'Blackstone';
 *   src: url('/fonts/Blackstone.woff2') format('woff2');
 *   font-weight: normal;
 * }
 * @font-face {
 *   font-family: 'Higuen Elage';
 *   src: url('/fonts/HiguenElage.woff2') format('woff2');
 *   font-weight: normal;
 * }
 *
 * Và thêm DM Sans từ Google Fonts:
 * <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
 *
 * Trong tailwind.config.ts:
 * fontFamily: {
 *   blackstone: ["'Blackstone'", "cursive"],
 *   higuen: ["'Higuen Elage'", "serif"],
 *   dm: ["'DM Sans'", "sans-serif"],
 * }
 */

const YourExperts: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row mb-8"
      style={{ background: "#c4a882" }}
    >
      {/* ── LEFT COLUMN ── */}
      <div className="relative flex-1 px-4 md:px-12 py-14 flex flex-col justify-start ml:4 md:ml-8">
        {/* Mandala watermark bottom-left */}
        <div className="absolute bottom-0 left-0 w-[320px] h-80 opacity-20 pointer-events-none z-0">
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
                  ry="14"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.5"
                />
                <ellipse
                  cx="100"
                  cy="132"
                  rx="4"
                  ry="14"
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
              r="50"
              fill="none"
              stroke="#fff"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="72"
              fill="none"
              stroke="#fff"
              strokeWidth="0.4"
            />
            <circle
              cx="100"
              cy="100"
              r="92"
              fill="none"
              stroke="#fff"
              strokeWidth="0.3"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="relative z-10 mb-2">
          {/* "Your" — Blackstone font */}
          <div
            className="-rotate-3  text-8xl tracking-[1px] leading-[0.8] "
            style={{
              fontFamily: "'Blackstone'",
            }}
          >
            Your
          </div>

          {/* "EXPERTS" — Higuen Elage font */}
          <div
            className="pl-5 text-[54px] font-normal uppercase leading-none tracking-[3px]"
            style={{
              fontFamily: "'HiguenElage'",
            }}
          >
            EXPERTS
          </div>
        </div>

        {/* Divider */}
        <div className="ml-5 bg-white relative z-10 w-72  h-[1.5px] mb-8" />

        {/* Expert Info */}
        <div className="relative z-10 max-w-md text-[14.5px] leading-[1.75]">
          {/* Name */}
          <p className="font-semibold text-[16px] tracking-wide mb-0.5">
            NICOLA HARDER, GERMANY
          </p>

          {/* Title */}
          <p className="font-semibold italic text-[14px] mb-3">
            Sacred Union Specialist, Co-Founder
          </p>

          {/* Bio paragraph 1 */}
          <p className="mb-4">
            Having worked as transformational coach with couples and groups the
            world over she is devoted to the restoration of conscious
            partnership and feminine–masculine harmony.
          </p>

          {/* Bio paragraph 2 */}
          <p className="mb-4">
            Her facilitation style is elegant, intuitive, and deeply attuned to
            the subtle emotional landscape of couples.
          </p>

          {/* Specializes in */}
          <p className="font-semibold mb-2">Nicola specializes in:</p>
          <ul className="list-none space-y-1 mb-4 pl-1">
            {[
              "Emotional attunement practices",
              "Creative embodiment",
              "Sensory connection rituals",
              "Integration and relational reflection",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#1a1008" }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Bio paragraph 3 */}
          <p>
            Her presence brings softness, discernment, and emotional
            intelligence to the{" "}
            <strong className="font-semibold">Sacred Union</strong> experience.
          </p>
        </div>
      </div>

      {/* ── RIGHT COLUMN — Photo ── */}
      <div className="relative w-full lg:w-[45%] min-h-[600px] lg:min-h-screen flex-shrink-0">
        <Image
          src="/images/banner6.png"
          alt="Nicola Harder"
          fill
          className="object-cover "
          priority
        />
      </div>
    </div>
  );
};

export default YourExperts;
