import Image from "next/image";
import React from "react";

const programs = [
  {
    img: "/images/banner8.png",
    imgSide: "right",
    tag: "Conscious Water Connection",
    tagColor: "#357e7a",
    title: "Liquid Hearts & Water Dance",
    titleColor: "#357e7a",
    desc: "Water is the ultimate mirror. In this session, the element of water supports us as we let go of control. It is a meditative, somatic experience where we move in the fluidity of the moment. Finding back to our natural flow.",
    descColor: "#f4f1de",
    when: "Thursdays; 2-4 pm",
    contribution: "333.000 VND",
    registration: "DM me by Wed evening",
  },
  {
    img: "/images/banner9.png",
    imgSide: "left",
    tag: "A Space for Sacred Relating",
    tagColor: "#4c5144",
    title: "Theater of Connection",
    titleColor: "#4c5144",
    desc: "Healing the bridge between the masculine and the feminine. We explore the dynamics between yin and yang not as opposites, but as a dance. A sacred playground to practice authentic relating in real-time. We use theater, movement, sharing circles and a variety of other creative expressions.",
    descColor: "#000000",
    when: "Saturdays; 11:00-1:30pm",
    contribution: "333.000 VND",
    registration: "DM me by Friday evening",
  },
  {
    img: "/images/banner10.png",
    imgSide: "right",
    tag: "Creative Sharing Circle",
    tagColor: "#ff5757",
    title: "Soul Sisters",
    titleColor: "#ff5757",
    desc: 'In this circle, we step out of "doing" and into "being". It is a safe container to share what is true, to be seen without judgment, and to nourish the collective feminine spirit through creativity, ritual and silence.',
    descColor: "#f4f1de",
    when: "Tuesdays from 6:30-8:30pm",
    contribution: "333.000 VND",
    registration: "DM me by Sunday evening",
  },
];

const WeeklyProgram: React.FC = () => {
  return (
    <>
      <div
        className="relative w-full overflow-hidden px-6 sm:px-12 md:px-20 py-10"
        style={{ background: "#b5a090" }}
      >
        <div className="mx-auto max-w-2xl">
          {/* Mandala watermark top-right */}
          <div className="absolute top-0 right-0 w-[260px] h-[260px] md:w-[360px] md:h-[360px] opacity-15 pointer-events-none z-0">
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
          <div className="relative z-10 mb-8 max-w-xs sm:max-w-lg">
            <h2
              className="text-[22px] sm:text-[26px] md:text-[28px] font-semibold leading-snug mb-4 text-[#f4f1de]"
              style={{ fontFamily: "'HiguenElage', serif" }}
            >
              Weekly Program: The Alchemy of Connection in Hoi An
            </h2>
            <p
              className="text-[13px] sm:text-[14px] leading-[1.75] text-[#f4f1de]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I am opening a field of presence and deep human encounter this
              month. If you feel called to explore the spaces of the heart, the
              water, and the sacred relating between us, you are warmly invited
              to join.
            </p>
          </div>

          {/* Program Items */}
          <div className="relative z-10 flex flex-col gap-12">
            {programs.map((p) => (
              <div
                key={p.title}
                className={`flex flex-col ${
                  p.imgSide === "right" ? "sm:flex-row" : "sm:flex-row-reverse"
                } gap-6 sm:gap-10 items-start`}
              >
                {/* Image */}
                <div className="relative w-full sm:w-[200px] md:w-[240px] flex-shrink-0 h-[200px] sm:h-[160px] md:h-[250px] overflow-hidden rounded-sm">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div
                  className="flex-1 text-[13px] sm:text-[14px] leading-[1.75]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {/* Title */}
                  <h3
                    className="text-[17px] sm:text-[19px] font-semibold mb-0.5"
                    style={{
                      fontFamily: "'HiguenElage', serif",
                      color: p.titleColor,
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Tag */}
                  <p
                    className="italic text-[12px] sm:text-[13px] mb-2"
                    style={{ color: p.tagColor }}
                  >
                    {p.tag}
                  </p>

                  {/* Desc */}
                  <p className="mb-3" style={{ color: p.descColor }}>
                    {p.desc}
                  </p>

                  {/* Meta */}
                  <p style={{ color: p.descColor }}>
                    <strong className="font-semibold">When:</strong> {p.when}
                  </p>
                  <p style={{ color: p.descColor }}>
                    <strong className="font-semibold">Contribution:</strong>{" "}
                    {p.contribution}
                  </p>
                  <p style={{ color: p.descColor }}>
                    <strong className="font-semibold">Registration:</strong>{" "}
                    {p.registration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[100vh]">
        <Image
          alt="bannerhome"
          src="/images/banner11.png"
          fill
          className="object-cover object-center"
        />
      </div>
    </>
  );
};

export default WeeklyProgram;
