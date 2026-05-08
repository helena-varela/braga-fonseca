import logo2 from "../assets/logo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [view, setView] = useState("servidor");

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-10 py-6 border-b-[0.5px] border-[#8E8781]/30 bg-[#E8E9D4]/95 backdrop-blur-sm">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo2}
            alt="Braga & Fonsêca"
            className="h-10 md:h-12 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <Link
          to="/cristina-braga"
          onClick={() => setView("servidor")}
          className={`text-[14px] font-cinzel tracking-[0.1em] px-5 py-2 transition-all ${
            view === "servidor" 
              ? "bg-[#8E8781] text-white" 
              : "text-[#8E8781] hover:bg-[#D3CCC6]"
          }`}
        >
          SERVIDOR PÚBLICO
        </Link>
        <Link
          to="/kelly-fonseca"
          onClick={() => setView("inss")}
          className={`text-[14px] font-cinzel tracking-[0.1em] px-5 py-2 transition-all ${
            view === "inss" 
              ? "bg-[#8E8781] text-white" 
              : "text-[#8E8781] hover:bg-[#D3CCC6]"
          }`}
        >
          BENEFÍCIOS INSS
        </Link>
      </div>
    </nav>
  );
}