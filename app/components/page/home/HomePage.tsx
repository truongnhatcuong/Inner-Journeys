import Image from "next/image";
import FadeIn from "../../ui/FadeIn";

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {/* Sacred */}
        <FadeIn delay={0} className="self-start ml-[8%] sm:ml-[15%] md:ml-[10%]">
          <h1
            className="
              text-[80px] sm:text-[120px] md:text-[160px] lg:text-[400px]
              leading-none tracking-[8px] sm:tracking-[14px] md:tracking-[20px]
            "
            style={{
              fontFamily: "'Blackstone', cursive",
              display: "inline-block",
              transform: "rotate(-10deg) skewX(-10deg)",
            }}
          >
            Sacred
          </h1>
        </FadeIn>

        {/* UNION */}
        <FadeIn delay={150} className="self-center">
          <p
            className="
              text-[70px] sm:text-[100px] md:text-[140px] lg:text-[230px]
              leading-none -mt-4 sm:-mt-30
            "
            style={{ fontFamily: "'HiguenElage', serif" }}
          >
            UNION
          </p>
        </FadeIn>

        {/* THE ART OF RELATIVE */}
        <FadeIn delay={300}>
          <p
            className="
              text-[11px] sm:text-[16px] md:text-[20px] lg:text-[40px]
              tracking-[3px] sm:tracking-[4px]
              font-black uppercase
              mt-3 sm:mt-4
              text-center px-4
            "
            style={{ fontFamily: "'LeagueSpartan', sans-serif" }}
          >
            THE ART OF RELATIVE
          </p>
        </FadeIn>

        {/* BOOK INTRO CALL */}
        <FadeIn delay={450}>
          <div
            className="
              mt-5 sm:mt-7
              underline uppercase tracking-[2px]
              bg-black/70 hover:bg-black transition-colors
              px-5 py-3 sm:px-6 sm:py-4
              text-[10px] sm:text-[15px]
              cursor-pointer
            "
            style={{ fontFamily: "'LeagueSpartan', sans-serif" }}
          >
            book intro call
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default HomePage;
