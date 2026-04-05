import Image from "next/image";
import FadeIn from "../../ui/FadeIn";

const YourExperts: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row"
      style={{
        backgroundImage: "url('/images/bg3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── LEFT COLUMN ── */}
      <div className="relative flex-1 px-6 sm:px-10 md:px-12 py-10 sm:py-14 flex flex-col justify-start">
        {/* Heading */}
        <FadeIn delay={0} className="relative z-10 mb-2">
          <div
            className="-rotate-3 text-[70px] sm:text-[95px] md:text-[120px] tracking-[1px] leading-[0.8]"
            style={{ fontFamily: "'Blackstone'" }}
          >
            Your
          </div>
          <div
            className="pl-5 text-[42px] sm:text-[58px] md:text-[72px] font-normal uppercase leading-none tracking-[3px]"
            style={{ fontFamily: "'HiguenElage'" }}
          >
            EXPERTS
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={150}>
          <div className="ml-5 bg-white relative z-10 w-56 sm:w-72 h-[1.5px] mb-6 sm:mb-8" />
        </FadeIn>

        {/* Expert Info */}
        <div className="relative z-10 max-w-md text-[16px] sm:text-[17px] leading-[1.75]">
          {/* Name + Title */}
          <FadeIn delay={250}>
            <p className="font-semibold text-[17px] sm:text-[19px] tracking-wide mb-0.5">
              NICOLA HARDER, GERMANY
            </p>
            <p className="font-semibold italic text-[15px] sm:text-[16px] mb-4">
              Sacred Union Specialist, Co-Founder
            </p>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={350}>
            <p className="mb-4">
              Having worked as transformational coach with couples and groups the
              world over she is devoted to the restoration of conscious
              partnership and feminine–masculine harmony.
            </p>
            <p className="mb-4">
              Her facilitation style is elegant, intuitive, and deeply attuned to
              the subtle emotional landscape of couples.
            </p>
          </FadeIn>

          {/* Specializes in */}
          <FadeIn delay={450}>
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
                    className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "#1a1008" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Her presence brings softness, discernment, and emotional
              intelligence to the{" "}
              <strong className="font-semibold">Sacred Union</strong> experience.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── RIGHT COLUMN — Photo ── */}
      <div className="relative w-full lg:w-[45%] min-h-[400px] sm:min-h-[550px] lg:min-h-screen shrink-0">
        <Image
          src="/images/banner6.png"
          alt="Nicola Harder"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default YourExperts;
