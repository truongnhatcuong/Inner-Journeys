import Image from "next/image";
import FadeIn from "../../ui/FadeIn";

const Conscious: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-16 py-12 gap-8 lg:gap-1"
      style={{
        backgroundImage: "url('/images/bg1.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left: Text Column */}
      <div className="relative z-10 w-full lg:w-[42%] flex flex-col justify-center">
        {/* Heading block */}
        <FadeIn delay={0}>
          <h2
            className="font-cursive text-[80px] sm:text-[110px] md:text-[130px] tracking-[6px] font-serif origin-left inline-block -skew-3 leading-10"
            style={{ fontFamily: "'Blackstone', cursive" }}
          >
            Conscious
          </h2>
          <h1
            className="pl-7 text-[44px] sm:text-[60px] md:text-[72px] font-normal uppercase leading-none mb-5 tracking-[10px]"
            style={{ fontFamily: "'HiguenElage'" }}
          >
            COUPLES
          </h1>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={150}>
          <div className="ml-7 relative z-10 w-64 sm:w-90 bg-white h-[1.5px] mb-8 sm:mb-10" />
        </FadeIn>

        {/* Body text */}
        <FadeIn delay={300}>
          <div className="max-w-lg leading-[1.8] text-[16px] sm:text-[18px] space-y-4">
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
        </FadeIn>
      </div>

      {/* Right: Images Column */}
      <div className="relative z-10 w-full lg:w-[40%] flex items-end justify-center lg:justify-end gap-4 sm:gap-8">
        {/* Small image */}
        <div className="relative w-[28%] sm:w-52 lg:w-60 h-55 sm:h-70 lg:h-80 overflow-hidden rounded-sm shrink-0 self-end">
          <Image
            alt="Hands holding"
            src="/images/banner2.jpeg"
            fill
            className="object-cover"
          />
        </div>

        {/* Large image */}
        <div className="relative w-[55%] sm:w-75 lg:w-100 h-80 sm:h-110 lg:h-140 overflow-hidden rounded-sm shrink-0">
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
