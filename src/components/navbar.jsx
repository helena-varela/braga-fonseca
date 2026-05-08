import logo2 from "../assets/logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [view, setView] = useState("servidor");

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-4 md:px-20 py-4 md:py-6 border-b-[0.5px] border-[#8E8781]/30 bg-[#E8E9D4]/95 backdrop-blur-sm">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo2}
            alt="Braga & Fonsêca"
            className="h-8 md:h-12 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex gap-1 md:gap-2">
        <Link
          to="/cristina-braga"
          onClick={() => setView("servidor")}
          className={`text-[10px] md:text-[14px] font-cinzel tracking-[0.05em] md:tracking-[0.1em] px-3 md:px-5 py-2 transition-all text-center leading-tight ${
            view === "servidor"
              ? "bg-[#8E8781] text-white"
              : "text-[#8E8781] hover:bg-[#D3CCC6]"
          }`}
        >
          <span className="md:inline">
            SERVIDOR <br className="md:hidden" /> PÚBLICO
          </span>
        </Link>

        <Link
          to="/kelly-fonseca"
          onClick={() => setView("inss")}
          className={`text-[10px] md:text-[14px] font-cinzel tracking-[0.05em] md:tracking-[0.1em] px-3 md:px-5 py-2 transition-all text-center leading-tight ${
            view === "inss"
              ? "bg-[#8E8781] text-white"
              : "text-[#8E8781] hover:bg-[#D3CCC6]"
          }`}
        >
          <span className="md:inline">
            BENEFÍCIOS <br className="md:hidden" /> INSS
          </span>
        </Link>
      </div>
    </nav>
  );
}
