import fk from "@/assets/fk.png";
import logoo from "@/assets/logo.png";
import fazal from "@/assets/fkk.png";
import img7 from "@/assets/7.png";
import img8 from "@/assets/8.png";
import img9 from "@/assets/9.png";
import img10 from "@/assets/10.png";
import img11 from "@/assets/11.png";
import img12 from "@/assets/12.png";
import img13 from "@/assets/13.png";
import img14 from "@/assets/14.png";
import img15 from "@/assets/15.png";

const stack = [img7, img8, img9, img10, img11, img12, img13, img14, img15];

export function Hero() {
  return (
    <section className="relative mt-8 lg:mt-14 overflow-hidden lg:min-h-[calc(100dvh-72px)]">
      <style>{`
        @keyframes techFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes mobileGlow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.08); }
        }
      `}</style>

      <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 lg:min-h-[calc(100dvh-72px)] lg:flex lg:flex-col">
        {/* MOBILE HERO */}
        <div className="relative lg:hidden">
          <div className="relative z-10 flex flex-col items-center text-center mt-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
              <span
                className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(0,119,255,0.9)]"
                style={{ animation: "mobileGlow 2s ease-in-out infinite" }}
              />

              <span className="text-[10px] uppercase tracking-[0.24em] text-primary">
                MERN Stack Developer
              </span>
            </div>

            <h1 className="max-w-[390px] text-[26px] font-light leading-[1.08] tracking-tight text-white sm:text-[44px] z-30">
              Building modern web apps that feel{" "}
              <span className="text-primary">Fast,</span>{" "}
              <span className="text-primary">Clean</span> &{" "}
              <span className="text-primary">Premium.</span>
            </h1>

            <div className="relative -mt-2 w-[360px] sm:w-[360px]">
              <img
                src={fk}
                alt="Developer portrait"
                className="relative z-10 w-full object-contain grayscale"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP HERO */}
        <div className="hidden lg:grid flex-1 items-center gap-4 lg:grid-cols-[380px_560px_380px] xl:grid-cols-[430px_650px_430px] 2xl:grid-cols-[480px_760px_480px] justify-center pt-4 xl:pt-6">
          {/* LEFT SIDE */}
          <div className="relative translate-y-1 xl:translate-y-2">
            <img
              src={logoo}
              alt="logo"
              className="w-44 h-44 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-contain ml-20 xl:mb-70 xl:ml-48 2xl:ml-36 -mt-4 xl:-mt-6"
            />

            <div className="absolute left-28 xl:mt-11 xl:left-64 2xl:left-67 top-36 xl:top-44 2xl:top-52 z-50">
              <h1 className="text-7xl xl:text-7xl 2xl:text-[6rem]  font-bold leading-[0.9] tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]">
                Fazal <br />
                <span className="pl-8 lg:pl-12">Karim</span>
              </h1>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative mx-auto translate-y-4 xl:-translate-y-1 z-20">
            <div className="relative w-[560px] xl:w-[650px] 2xl:w-[760px] h-[min(820px,82dvh)] overflow-hidden rounded-sm">
              <img
                src={fazal}
                alt="Fazal Karim"
                className="w-full h-full object-contain grayscale"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative translate-y-1 xl:translate-y-2 xl:right-20 ">
            <div className="max-w-[420px] xl:max-w-[520px] text-left">
              <p className="text-[35px] xl:text-[33px] 2xl:text-[37px] font-thin leading-[1.3] tracking-tight">
                <span className="text-primary">Designing & developing</span>{" "}
                <span className="text-white">
                  modern web solutions <br />
                  that drive growth
                </span>
              </p>
            </div>

            <img
              src={logoo}
              alt="logo"
              className="w-44 h-44 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-contain ml-14 xl:ml-32 2xl:ml-32 mt-12 rotate-180"
            />
          </div>
        </div>

        {/* TECH LOGOS */}
        <div className="mt-0 lg:mt-auto border-y border-white/10 py-4 relative z-40">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 sm:gap-x-8 lg:justify-around">
            {stack.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="tech"
                style={{
                  animation: `techFloat 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.18}s`,
                }}
                className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 object-contain transition-all duration-300 hover:scale-125 hover:-translate-y-1"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
