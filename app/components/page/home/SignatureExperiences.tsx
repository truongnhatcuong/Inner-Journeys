import Image from "next/image";
import FadeIn from "../../ui/FadeIn";

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
      className="relative w-full overflow-hidden px-6 sm:px-12 md:px-20 py-10 md:py-14"
      style={{
        backgroundImage: "url('/images/bg2.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <FadeIn delay={0} className="relative z-10 mb-2">
        <div
          className="-rotate-3 inline-block text-[72px] sm:text-8xl md:text-[130px] leading-[0.8]"
          style={{ fontFamily: "'Blackstone', cursive" }}
        >
          Signature
        </div>
        <div
          className="pl-4 sm:pl-8 md:pl-11 text-[36px] sm:text-[48px] md:text-[72px] uppercase tracking-[3px] md:tracking-[4px] leading-[0.8]"
          style={{ fontFamily: "'HiguenElage'" }}
        >
          EXPERIENCES
        </div>
      </FadeIn>

      {/* Divider */}
      <FadeIn delay={100}>
        <div className="ml-4 sm:ml-8 md:ml-12 relative z-10 w-48 sm:w-64 md:w-90 bg-white h-[1.5px] mb-8 md:mb-10" />
      </FadeIn>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-13">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.title} delay={200 + i * 150} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-80 overflow-hidden mb-5">
              <Image
                src={exp.img}
                alt={exp.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className="flex-1 flex flex-col text-[16px] sm:text-[17px] leading-[1.7] mb-5">
              <p className="font-bold text-[17px] sm:text-[18px] tracking-wide mb-2">
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
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default SignatureExperiences;
