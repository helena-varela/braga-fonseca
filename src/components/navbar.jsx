import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-4 md:px-20 py-3 md:py-6 border-b-[0.5px] border-[#8E8781]/30 bg-[#E8E9D4]/95 backdrop-blur-sm">
      
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo2}
            alt="Logo"
            className="h-7 md:h-11 w-auto object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Container de Botões */}
      <div className="flex gap-2 md:gap-8">
        <Link
          to="/cristina-braga"
          className="text-[9px] md:text-[13px] font-cinzel font-bold tracking-[0.1em] md:tracking-[0.2em] 
          px-3 md:px-12 py-2 md:py-3 bg-[#8E8781] text-white 
          rounded-none transition-all duration-300 hover:brightness-110 text-center"
        >
          SERVIDOR
        </Link>
        
        <Link
          to="/kelly-fonseca"
          className="text-[9px] md:text-[13px] font-cinzel font-bold tracking-[0.1em] md:tracking-[0.2em] 
          px-3 md:px-12 py-2 md:py-3 bg-[#8E8781] text-white 
          rounded-none transition-all duration-300 hover:brightness-110 text-center"
        >
          INSS
        </Link>
      </div>
    </nav>
  );
}