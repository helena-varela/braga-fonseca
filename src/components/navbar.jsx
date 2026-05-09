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
            className="h-8 md:h-11 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      <div className="bg-[#8E8781]/10 p-1 rounded-full flex items-center border border-[#8E8781]/20">
        <Link
          to="/cristina-braga"
          onClick={() => setView("servidor")}
          className={`
            text-[9px] md:text-[12px] font-cinzel font-bold tracking-widest
            px-4 md:px-8 py-2 rounded-full transition-all duration-500 text-center
            ${view === "servidor" 
              ? "bg-[#8E8781] text-white shadow-md" 
              : "text-[#8E8781] hover:bg-[#8E8781]/5"}
          `}
        >
          SERVIDOR
        </Link>
        
        <Link
          to="/kelly-fonseca"
          onClick={() => setView("inss")}
          className={`
            text-[9px] md:text-[12px] font-cinzel font-bold tracking-widest
            px-4 md:px-8 py-2 rounded-full transition-all duration-500 text-center
            ${view === "inss" 
              ? "bg-[#8E8781] text-white shadow-md" 
              : "text-[#8E8781] hover:bg-[#8E8781]/5"}
          `}
        >
          INSS
        </Link> {/* Ajustado de </cite> para </Link> */}
      </div>
    </nav>
  );
}