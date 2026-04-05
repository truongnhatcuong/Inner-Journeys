import Image from "next/image";
import FadeIn from "../../ui/FadeIn";

const SacredValentine: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 -mt-15">
      {/* Background image */}
      <Image
        alt="bannerhome"
        src="/images/banner12.png"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Content */}
      <div className="absolute top-5 z-10 flex flex-col items-center text-center w-full max-w-xs sm:max-w-sm px-4">
        {/* Title */}
        <FadeIn delay={0}>
          <h1
            className="text-[64px] sm:text-[80px] md:text-[100px] leading-none mb-1 font-black"
            style={{ fontFamily: "'Blackstone', cursive", color: "#6b3fa0" }}
          >
            Sacred Valentine
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={200}>
          <p
            className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.4] sm:leading-[1.8] mb-6 font-semibold"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#a359a0" }}
          >
            A journey of deep connection,
            <br />
            expression &amp; sharing
            <br />
            <span style={{ color: "#69418b" }}>...for singles and couples...</span>
          </p>
        </FadeIn>
      </div>

      {/* Book button */}
      <FadeIn delay={400} className="absolute bottom-8 z-10">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold tracking-widest text-white text-[14px] sm:text-[16px] uppercase"
          style={{
            background: "linear-gradient(180deg, #9b6fc4 0%, #7a4aab 60%, #6b3fa0 100%)",
            boxShadow: "0 4px 18px rgba(107,63,160,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.12em",
          }}
        >
          BOOK VIA WHATSAPP
        </a>
      </FadeIn>
    </div>
  );
};

export default SacredValentine;
