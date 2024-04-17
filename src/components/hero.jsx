import zIndex from "@mui/material/styles/zIndex";
import { useTranslation } from "react-i18next";

export default function Main(){
    const { i18n, t } = useTranslation();

  return (
    <main className="hero-img">
      <div className="overlay"></div>
      <div className="w-full py-24 z-10 relative md md:py-44 lg:py-60">
        <div className=" flex items-center justify-center flex-col h-full text-white"> 
          <p className="hero-secondary-copy text-3xl mb-2 font-['Montserrat']">LOOK BEAUTIFUL</p>
          <p className="hero-main-copy text-5xl font-bold mb-4 drop-shadow-lg">THIS SEASON</p>
          <button className="bg-[color:var(--color-1)] px-8 py-1 rounded-sm">
            BUY
          </button>
        </div>
      </div>
    </main>
  );
};